import { Building2, GraduationCap, type LucideIcon, User } from 'lucide-react';

import { infoData } from '@/lib/data-loader';

import { SectionTitle } from './section-title';
import { SplitSection } from './split-section';

import styles from './resume-sections.module.css';

export async function ResumeSections() {
  if (!infoData.resume) return null;

  return (
    <div className={styles.container}>
      <section>
        <Title icon={User} title="Resume Summary" />
        <SplitSection>
          <SplitSection.Left />
          <SplitSection.Right className={styles.summary}>{infoData.resume.summary}</SplitSection.Right>
        </SplitSection>
      </section>
      <section>
        <Title icon={Building2} title="Work Experience" />
        {infoData.employment?.map(job => (
          <WorkSection
            key={`rjob-${job.company}-${job.monthStart}${job.monthEnd}`}
            startDate={`${job.monthStart} ${job.yearStart}`}
            endDate={job.yearEnd ? `${job.monthEnd} ${job.yearEnd}` : undefined}
            title={job.title}
            company={job.company}
          >
            {job.duties && (
              <ul>
                {job.duties.map((duty, index) => (
                  <li key={`jdt-${job.company}-${index}`}>{duty}</li>
                ))}
              </ul>
            )}
          </WorkSection>
        ))}
      </section>
      {infoData.resume.education && (
        <section>
          <Title icon={GraduationCap} title="Education" />
          <SplitSection>
            <SplitSection.Left />
            <SplitSection.Right className={styles.education}>
              <h1>{infoData.resume.education.institution}</h1>
              <div>{infoData.resume.education.location}</div>
              <div>{infoData.resume.education.degree}</div>
              <div>{infoData.resume.education.major}</div>
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
