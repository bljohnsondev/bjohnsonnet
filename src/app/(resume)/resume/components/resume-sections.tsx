import { Building2, GraduationCap, type LucideIcon, User } from 'lucide-react';

import { getEmployment } from '@/lib/data-loader';
import type { ResumeData } from '@/types/resume-data';

import { SectionTitle } from './section-title';
import { SplitSection } from './split-section';

import styles from './resume-sections.module.css';

interface ResumeSectionsProps {
  resume: ResumeData;
}

export async function ResumeSections({ resume }: ResumeSectionsProps) {
  const jobs = await getEmployment();

  return (
    <div className={styles.container}>
      <section>
        <Title icon={User} title="Resume Summary" />
        <SplitSection>
          <SplitSection.Left />
          <SplitSection.Right className={styles.summary}>{resume.summary}</SplitSection.Right>
        </SplitSection>
      </section>
      <section>
        <Title icon={Building2} title="Work Experience" />
        {jobs.map(job => (
          <WorkSection
            key={`rjob-${job.id}`}
            startDate={`${job.monthStart} ${job.yearStart}`}
            endDate={job.yearEnd ? `${job.monthEnd} ${job.yearEnd}` : undefined}
            title={job.title}
            company={job.company}
          >
            {job.duties && (
              <ul>
                {job.duties.map(duty => (
                  <li key={`jdt-${job.id}-${duty}`}>{duty}</li>
                ))}
              </ul>
            )}
          </WorkSection>
        ))}
      </section>
      {resume.education && (
        <section>
          <Title icon={GraduationCap} title="Education" />
          <SplitSection>
            <SplitSection.Left />
            <SplitSection.Right className={styles.education}>
              <h1>{resume.education.institution}</h1>
              <div>{resume.education.location}</div>
              <div>{resume.education.degree}</div>
              <div>{resume.education.major}</div>
            </SplitSection.Right>
          </SplitSection>
        </section>
      )}
    </div>
  );
}

interface TitleProps {
  icon: LucideIcon;
  title: string;
}

function Title({ icon, title }: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.titleleft} />
      <SectionTitle icon={icon}>{title}</SectionTitle>
    </div>
  );
}

interface WorkSectionProps {
  startDate: string;
  endDate?: string;
  title: string;
  company: string;
  children?: React.ReactNode;
}

function WorkSection({ startDate, endDate = 'Present', title, company, children }: WorkSectionProps) {
  return (
    <SplitSection>
      <SplitSection.Left className={styles.workdates}>
        {startDate} -<br /> {endDate}
      </SplitSection.Left>
      <SplitSection.Right className={styles.workdetails}>
        <h1>{title}</h1>
        <h2>{company}</h2>
        <div>{children}</div>
      </SplitSection.Right>
    </SplitSection>
  );
}
