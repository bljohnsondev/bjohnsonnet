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
  skills?: string[];
  education?: EducationData;
}
