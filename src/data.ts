import { EducationItem, CertificationItem, CodingProfileItem, SkillCategory, FAQItem } from "./types";

export const CANDIDATE_PROFILE = {
  fullName: "Ganuboyina Santhosh",
  preferredName: "Santhosh",
  title: "Software Engineer Fresher",
  email: "ganuboinasanthosh@gmail.com",
  phone: "8074662699",
  location: "Devarapalli, Andhra Pradesh, India",
  linkedIn: "https://www.linkedin.com/in/ganuboyina-santhosh-0816892ba",
  gitHub: "https://github.com/ganuboyinasanthosh",
  leetCode: "https://leetcode.com/u/santhoshganuboyina/",
  codeChef: "https://www.codechef.com/users/u23a81a4316",
  languages: [
    { name: "Telugu", proficiency: "Native / Spoken Fluency" },
    { name: "English", proficiency: "Professional Spoken & Written" },
    { name: "Hindi", proficiency: "Literate (Reading & Writing)" }
  ],
  hobbies: [
    "Coding practice",
    "Reading books",
    "Cricket"
  ],
  careerGoals: {
    targetRoles: ["Software Engineer (SWE)", "Backend Developer", "Data Engineer"],
    dreamCompanies: ["MAANG", "Top Tech Giants", "Fast-Growing Tech Unicorns", "Top Global Consultancies"],
    shortTerm: "Secure an entry-level software engineering role at a product-based or top-tier consulting firm where I can apply my analytical skills and academic foundation.",
    longTerm: "Transition into engineering leadership, mentor junior developers, and align robust technical execution with overall business strategy.",
    focus: "Information Technology and SaaS"
  },
  summary: "Results-driven Computer Science undergraduate specializing in Artificial Intelligence with a strong CGPA of 8.15. Proven capabilities in core software engineering concepts including OOPs, Data Structures & Algorithms, and Backend fundamentals. Highly certified in next-generation cloud and agentic AI architectures with industry-recognized credentials from Oracle Cloud (GenAI Professional) and Salesforce (Agentforce Specialist). Seeking an entry-level software engineering position in India to build high-scale robust solutions."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BTech",
    branch: "Computer Science and Engineering (Artificial Intelligence)",
    college: "Sri Vasavi Engineering College",
    university: "JNTUK (Jawaharlal Nehru Technological University, Kakinada)",
    startYear: 2023,
    endYear: 2027,
    cgpa: 8.15,
    honors: "NPTEL Certified in IoT (Internet of Things)"
  },
  {
    id: "edu-2",
    degree: "Intermediate",
    branch: "MPC (Mathematics, Physics, Chemistry)",
    college: "DR.SRK&KSR JR.COLLEGE",
    location: "Nallajerla, Andhra Pradesh, India",
    marks: "907 / 1000"
  },
  {
    id: "edu-3",
    degree: "10th Class (SSC)",
    college: "ZPP HIGH SCHOOL",
    location: "Chinnayagudem, Andhra Pradesh, India",
    marks: "578 / 600"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    organization: "Oracle",
    issueDate: "October 09, 2025",
    credentialId: "102424621OCI25GAIOCP",
    validUntil: "October 09, 2027",
    badgeColor: "border-orange-500 text-orange-400 bg-orange-950/20",
    description: "Deep expertise in Generative AI architectures, Large Language Models (LLMs), prompt engineering, fine-tuning techniques, and deployment of secure enterprise AI applications on Oracle Cloud Infrastructure."
  },
  {
    id: "cert-2",
    name: "Salesforce Certified Agentforce Specialist",
    organization: "Salesforce",
    issueDate: "December 20, 2025",
    credentialId: "7236778",
    verificationLink: "https://sforce.co/verifycerts",
    badgeColor: "border-sky-500 text-sky-400 bg-sky-950/20",
    description: "Specialized in configuring autonomous AI agents (Agentforce), flow automation, advanced administration, and integrating AI workflows with Salesforce Customer 360 ecosystems."
  },
  {
    id: "cert-3",
    name: "NPTEL IoT Certification",
    organization: "NPTEL / Swayam (IIT)",
    issueDate: "Academic Semester",
    credentialId: "NPTEL-IoT-Certified",
    badgeColor: "border-teal-500 text-teal-400 bg-teal-950/20",
    description: "Completed comprehensive certification on Internet of Things (IoT) principles, sensory devices, embedded systems, networking layers, and cloud integrations."
  }
];

export const CODING_PROFILES_DATA: CodingProfileItem[] = [
  {
    id: "profile-1",
    platform: "LeetCode",
    username: "santhoshganuboyina",
    url: "https://leetcode.com/u/santhoshganuboyina/",
    metricLabel: "Problem Solving",
    metricValue: "Active Solver",
    highlightText: "Focused on DSA (Data Structures & Algorithms), arrays, sorting, and algorithmic thinking.",
    iconName: "Code2"
  },
  {
    id: "profile-2",
    platform: "CodeChef",
    username: "u23a81a4316",
    url: "https://www.codechef.com/users/u23a81a4316",
    metricLabel: "Competitive Coding",
    metricValue: "Active Participant",
    highlightText: "Practicing time-bound logical problem solving and competitive math-programming challenges.",
    iconName: "Terminal"
  },
  {
    id: "profile-3",
    platform: "GitHub",
    username: "ganuboyinasanthosh",
    url: "https://github.com/ganuboyinasanthosh",
    metricLabel: "Version Control",
    metricValue: "Repositories",
    highlightText: "Managing academic coursework, code labs, and basic Java application codebases.",
    iconName: "Github"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code",
    skills: ["Java", "C", "Python"]
  },
  {
    title: "Backend Technology",
    icon: "Cpu",
    skills: ["Java EE (Fundamentals)", "APIs & Web Servlets"]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: ["SQL", "MySQL"]
  },
  {
    title: "Core Computer Science",
    icon: "Layers",
    skills: ["OOPs", "DSA (Data Structures & Algorithms)", "SDLC (Software Development Life Cycle)", "Backend Fundamentals", "Version Control (Git)"]
  },
  {
    title: "Developer Tools & Platforms",
    icon: "Settings",
    skills: ["GitHub", "LeetCode", "CodeChef", "GeeksforGeeks"]
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: ["Analytical Problem-Solving", "Collaborative Teamwork", "Communication", "Leadership", "Critical Thinking", "Adaptability", "Time Management", "Presentation", "Decision Making"]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Are you open to immediate relocation within India?",
    answer: "Yes, absolutely! I am based in Andhra Pradesh but am highly adaptable and fully prepared to relocate to primary Indian tech hubs including Bangalore, Hyderabad, Pune, Chennai, Mumbai, or Delhi NCR for a full-time software engineering role."
  },
  {
    question: "As a fresh graduate without corporate internships, how do you demonstrate readiness?",
    answer: "My readiness is backed by: (1) My strong CSE academic foundation with an 8.15 CGPA, (2) Deep hands-on practice in Java and backend fundamentals, (3) High-tier industry credentials such as the Oracle Cloud GenAI Professional and Salesforce Agentforce Specialist, which prove my ability to learn and apply next-generation tech rapidly, and (4) Daily coding problem-solving on LeetCode and CodeChef."
  },
  {
    question: "What is your primary area of technical interest?",
    answer: "I am passionate about backend systems, enterprise software, and scalable AI applications. That is why I have focused heavily on Java, SQL, and advanced cloud technologies. I enjoy writing clean, high-performance, and typed code that solves solid business problems."
  },
  {
    question: "What are your immediate and long-term career aspirations?",
    answer: "My immediate focus is to secure a Software Engineer role at a product or top-tier consulting firm to establish my engineering fundamentals. Long-term, I aspire to grow into engineering management or senior architecture where I can design robust services and lead high-performing tech teams."
  },
  {
    question: "How can recruiters and engineering managers contact you for interviews?",
    answer: "Recruiters can reach me directly via email at ganuboinasanthosh@gmail.com, call me at +91 8074662699, or connect with me via LinkedIn. I respond very quickly to technical assessments and scheduled screening calls."
  }
];
