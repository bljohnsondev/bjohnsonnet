export interface EmploymentData {
  id?: number;
  monthStart?: string;
  yearStart: number;
  monthEnd?: string;
  yearEnd?: number;
  title: string;
  company: string;
  duties?: string[];
  skills?: string[];
}
