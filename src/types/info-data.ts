import type { SkillGroups } from './skill-groups';

export interface SiteData {
  name?: string;
  tagline?: string;
  description?: string;
  title?: string;
  company?: string;
  department?: string;
  summary?: string;
  about?: string[];
  email?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  resumeUrl?: string;
}

export interface EducationData {
  institution?: string;
  location?: string;
  degree?: string;
  major?: string;
}

export interface SeekingData {
  id?: string;
  name?: string;
  role?: string;
}

export interface ResumeData {
  pdfTitle?: string;
  title?: string;
  summary?: string;
  skills?: SkillGroups;
  education?: EducationData;
  seeking?: SeekingData[];
}

export interface EmploymentData {
  monthStart?: string;
  yearStart: number;
  monthEnd?: string;
  yearEnd?: number;
  title: string;
  company: string;
  duties?: string[];
  skills?: string[];
}

export interface InfoData {
  site?: SiteData;
  resume?: ResumeData;
  employment?: EmploymentData[];
}
