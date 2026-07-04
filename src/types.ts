export interface EducationItem {
  id: string;
  degree: string;
  branch?: string;
  college: string;
  university?: string;
  startYear?: number;
  endYear?: number;
  cgpa?: number;
  marks?: string;
  location?: string;
  honors?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  validUntil?: string;
  verificationLink?: string;
  badgeColor: string;
  description: string;
}

export interface CodingProfileItem {
  id: string;
  platform: string;
  username: string;
  url: string;
  metricLabel: string;
  metricValue: string;
  highlightText: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
