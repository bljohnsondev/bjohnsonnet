export interface EmploymentData {
  id?: number;
  yearStart: number;
  yearEnd?: number;
  title: string;
  company: string;
  duties?: string[];
  skills?: string[];
}
