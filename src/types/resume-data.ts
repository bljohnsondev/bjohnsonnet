import type { SkillGroups } from './skill-groups';

export interface EducationData {
  institution?: string;
  location?: string;
  degree?: string;
  major?: string;
}

export interface ResumeData {
  pdfTitle?: string;
  title?: string;
  summary?: string;
  seeking?: string;
  skills?: SkillGroups;
  education?: EducationData;
}
