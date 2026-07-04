import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface BenzeneRing {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  angle: number;
  spinSpeed: number;
  alpha: number;
  targetAlpha: number;
  glowStrength: number; // 0 to 1 reactive factor
  spinMultiplier: number; // increases on click/mouse proximity
  resonancePhase: number; // floating state for delocalized ring pulsing
}

interface ResonanceBeam {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  alpha: number;
  speed: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
}

export default function BackgroundGraphics() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const shockwavesRef = useRef<Shockwave[]>([]);

  // Smooth mouse tracking spring for the main ambient spotlight
  const springConfig = { damping: 32, stiffness: 110, mass: 0.9 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      mouseRef.current.active = false;
    };

    const handleWindowClick = (e: MouseEvent) => {
      // Limit active waves for performance
      if (shockwavesRef.current.length > 4) {
        shockwavesRef.current.shift();
      }
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.45,
        speed: 7.5,
        alpha: 1.0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleWindowClick);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleWindowClick);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering, mouseX, mouseY]);

  // High Performance Canvas Chemical Benzene Network Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rings: BenzeneRing[] = [];
    let beams: ResonanceBeam[] = [];
    const maxRings = 24; // Perfect visual density

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initMolecularModel();
    };

    const initMolecularModel = () => {
      const w = canvas.width;
      const h = canvas.height;

      rings = [];
      for (let i = 0; i < maxRings; i++) {
        // Vary sizes to create pseudo-3D spatial depth (foreground to background layers)
        const baseRadius = Math.random() * 20 + 22; // Hexagon radius (22px to 42px)
        rings.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35, // slow atmospheric drift
          vy: (Math.random() - 0.5) * 0.35,
          baseRadius,
          radius: baseRadius,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.006 + 0.002, // slow continuous rotation
          alpha: Math.random() * 0.5 + 0.15,
          targetAlpha: Math.random() * 0.6 + 0.2,
          glowStrength: 0,
          spinMultiplier: 1.0,
          resonancePhase: Math.random() * Math.PI * 2,
        });
      }

      beams = [];
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const mouse = mouseRef.current;
      const shockwaves = shockwavesRef.current;

      // Update & Draw shockwave expansion rings
      shockwavesRef.current = shockwaves.filter((wave) => {
        wave.radius += wave.speed;
        wave.alpha = Math.max(0, 1.0 - wave.radius / wave.maxRadius);

        // Render sleek double shockwave line
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 211, 238, ${wave.alpha * 0.22})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, Math.max(0, wave.radius - 20), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(20, 184, 166, ${wave.alpha * 0.1})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();

        return wave.alpha > 0;
      });

      // Update & draw active interconnecting resonance beams
      beams = beams.filter((beam) => {
        beam.alpha -= 0.015;
        ctx.beginPath();
        ctx.moveTo(beam.startX, beam.startY);
        ctx.lineTo(beam.endX, beam.endY);
        ctx.strokeStyle = `rgba(34, 211, 238, ${beam.alpha * 0.35})`;
        ctx.lineWidth = 1.25;
        ctx.stroke();
        return beam.alpha > 0;
      });

      // Update & Draw Benzene Rings
      rings.forEach((ring, idx) => {
        // 1. Slow atmospheric movement
        ring.x += ring.vx * ring.spinMultiplier;
        ring.y += ring.vy * ring.spinMultiplier;

        // Wrap around borders gracefully
        const margin = ring.radius * 2;
        if (ring.x < -margin) ring.x = w + margin;
        else if (ring.x > w + margin) ring.x = -margin;

        if (ring.y < -margin) ring.y = h + margin;
        else if (ring.y > h + margin) ring.y = -margin;

        // 2. Slow natural spin + spring back spin multiplier
        ring.angle += ring.spinSpeed * ring.spinMultiplier;
        if (ring.spinMultiplier > 1.0) {
          ring.spinMultiplier -= 0.025;
        } else {
          ring.spinMultiplier = 1.0;
        }

        // Inner delocalized orbital phase speed
        ring.resonancePhase += 0.025;

        // 3. Mouse attraction & activation glow
        let distanceToMouse = Infinity;
        if (mouse.active) {
          const dx = mouse.x - ring.x;
          const dy = mouse.y - ring.y;
          distanceToMouse = Math.sqrt(dx * dx + dy * dy);

          // Magnetic molecular pull
          if (distanceToMouse < 240) {
            const pullFactor = (1 - distanceToMouse / 240) * 0.45;
            ring.x += (dx / distanceToMouse) * pullFactor;
            ring.y += (dy / distanceToMouse) * pullFactor;
            
            // Intensify ring properties when hovering close
            ring.glowStrength = Math.max(ring.glowStrength, (1 - distanceToMouse / 240) * 0.8);
            ring.spinMultiplier = Math.max(ring.spinMultiplier, 1.0 + (1 - distanceToMouse / 240) * 2.5);
          }
        }

        // 4. Click Shockwave collision triggers
        shockwaves.forEach((wave) => {
          const dx = ring.x - wave.x;
          const dy = ring.y - wave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Push molecules outwards and trigger high energy spin states
          if (Math.abs(dist - wave.radius) < 30) {
            ring.glowStrength = 1.0; // Charge full energy
            ring.spinMultiplier = 6.0; // Super spin
            
            // Push direction
            const pushX = (dx / dist) * 12 * wave.alpha;
            const pushY = (dy / dist) * 12 * wave.alpha;
            ring.x += pushX;
            ring.y += pushY;

            // Spawn visual connection lines (resonance beams) to other close charged rings
            rings.forEach((otherRing, oIdx) => {
              if (idx !== oIdx) {
                const odx = otherRing.x - ring.x;
                const ody = otherRing.y - ring.y;
                const odist = Math.sqrt(odx * odx + ody * ody);
                if (odist < 140 && Math.random() < 0.15) {
                  beams.push({
                    startX: ring.x,
                    startY: ring.y,
                    endX: otherRing.x,
                    endY: otherRing.y,
                    alpha: wave.alpha,
                    speed: 1,
                  });
                }
              }
            });
          }
        });

        // Decaying glow back to baseline
        if (ring.glowStrength > 0) {
          ring.glowStrength -= 0.015;
        } else {
          ring.glowStrength = 0;
        }

        // Pulse natural opacity
        ring.alpha += (ring.targetAlpha - ring.alpha) * 0.015;
        if (Math.abs(ring.alpha - ring.targetAlpha) < 0.05) {
          ring.targetAlpha = Math.random() * 0.55 + 0.15;
        }

        // --- DRAW THE BENZENE HEXAGON STRUCTURE ---
        const currentRadius = ring.baseRadius * (1.0 + ring.glowStrength * 0.15);
        const segments = 6;
        const points: { x: number; y: number }[] = [];

        // Compute 6 regular hexagon vertices
        for (let s = 0; s < segments; s++) {
          const theta = ring.angle + (s * Math.PI) / 3;
          points.push({
            x: ring.x + Math.cos(theta) * currentRadius,
            y: ring.y + Math.sin(theta) * currentRadius,
          });
        }

        // Dynamic styling variables
        const baseAlpha = Math.min(1.0, ring.alpha + ring.glowStrength * 0.6);
        const strokeColor = ring.glowStrength > 0.2 
          ? `rgba(34, 211, 238, ${baseAlpha})` 
          : `rgba(20, 184, 166, ${baseAlpha * 0.6})`;

        // Set glow effect for highly energized rings
        if (ring.glowStrength > 0.25) {
          ctx.shadowBlur = 8 + ring.glowStrength * 12;
          ctx.shadowColor = "#22d3ee";
        } else {
          ctx.shadowBlur = 0;
        }

        // A. Draw Outer Sigma Bonds (The solid Hexagon)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let s = 1; s < segments; s++) {
          ctx.lineTo(points[s].x, points[s].y);
        }
        ctx.closePath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = ring.glowStrength > 0.2 ? 2.0 : 1.25;
        ctx.stroke();

        // B. Draw Hydrogen Atom Side-Chains (Radial spikes extending outwards from Carbon vertices)
        points.forEach((p, s) => {
          const theta = ring.angle + (s * Math.PI) / 3;
          const extX = ring.x + Math.cos(theta) * (currentRadius * 1.25);
          const extY = ring.y + Math.sin(theta) * (currentRadius * 1.25);

          // Draw covalent C-H bond line
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(extX, extY);
          ctx.strokeStyle = ring.glowStrength > 0.2 
            ? `rgba(34, 211, 238, ${baseAlpha * 0.4})` 
            : `rgba(20, 184, 166, ${baseAlpha * 0.25})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();

          // Draw tiny Hydrogen terminal circle node
          ctx.beginPath();
          ctx.arc(extX, extY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = ring.glowStrength > 0.2 
            ? `rgba(34, 211, 238, ${baseAlpha * 0.85})` 
            : `rgba(20, 184, 166, ${baseAlpha * 0.45})`;
          ctx.fill();
        });

        // C. Draw Alternating Inner Pi-Bonds OR Delocalized Electron Resonance Circle
        // We render a beautiful glowing delocalized electron circle in the center of the hexagon
        const innerCircleRadius = currentRadius * 0.62;
        const pulseRatio = 1.0 + Math.sin(ring.resonancePhase) * 0.06; // slight orbital breath pulse
        
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, innerCircleRadius * pulseRatio, 0, Math.PI * 2);
        
        // Alternating dashed pattern representing pi bonds resonance
        ctx.strokeStyle = ring.glowStrength > 0.2 
          ? `rgba(34, 211, 238, ${baseAlpha * 0.75})` 
          : `rgba(20, 184, 166, ${baseAlpha * 0.35})`;
        ctx.lineWidth = 1.1;
        ctx.setLineDash([4, 4]); // Dashed delocalized ring
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash for subsequent drawings

        // Draw a central dense carbon nucleus pulse core
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();

        // Reset shadow settings
        ctx.shadowBlur = 0;
      });

      // --- E. DRAW SECONDARY DRIVER GRID NETWORK ---
      // Draw light structural bond lines connecting close independent molecules
      for (let i = 0; i < rings.length; i++) {
        const r1 = rings[i];
        for (let j = i + 1; j < rings.length; j++) {
          const r2 = rings[j];
          const dx = r1.x - r2.x;
          const dy = r1.y - r2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            // Faint lattice linking bonds
            const baseAlpha = (1.0 - dist / 150) * 0.08;
            const linkAlpha = baseAlpha + (Math.max(r1.glowStrength, r2.glowStrength) * 0.2);

            ctx.beginPath();
            ctx.moveTo(r1.x, r1.y);
            ctx.lineTo(r2.x, r2.y);
            ctx.strokeStyle = r1.glowStrength > 0.3 || r2.glowStrength > 0.3
              ? `rgba(34, 211, 238, ${linkAlpha})`
              : `rgba(20, 184, 166, ${linkAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* High-Performance Canvas Benzene Net */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-80" />

      {/* Dynamic Interactive Soft Mouse Spotlight Aura */}
      {isHovering && (
        <motion.div
          className="hidden md:block absolute -left-[240px] -top-[240px] w-[480px] h-[480px] rounded-full blur-[80px]"
          style={{
            x: smoothX,
            y: smoothY,
            backgroundImage: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, rgba(99,102,241,0.02) 60%, transparent 100%)",
          }}
        />
      )}

      {/* Broad Floating Ambient Nebula Clouds */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[12%] left-[6%] w-[450px] h-[450px] rounded-full bg-brand-accent/3 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 35, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-[22%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/2 blur-[150px]"
      />

      {/* Cyberpunk Moving Alignment Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b11_1px,transparent_1px),linear-gradient(to_bottom,#1e293b11_1px,transparent_1px)] [background-size:60px_60px] opacity-45"
        style={{
          animation: "grid-drift 45s linear infinite",
        }}
      />

      {/* Upper and Lower Lighting Vignette Fades */}
      <div className="absolute top-0 left-0 right-0 h-[240px] bg-gradient-to-b from-brand-dark via-brand-dark/75 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[240px] bg-gradient-to-t from-brand-dark via-brand-dark/75 to-transparent" />

      {/* Minimalistic Hardware Corner Crop Brackets */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-brand-accent/15 hidden xl:block rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-brand-accent/15 hidden xl:block rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-brand-accent/15 hidden xl:block rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-brand-accent/15 hidden xl:block rounded-br-xl" />

      <style>{`
        @keyframes grid-drift {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 60px 120px;
          }
        }
      `}</style>
    </div>
  );
}
