import { skillsData } from '@/lib/data-loader';
import type { EmploymentData } from '@/types/info-data';

import styles from './job-details.module.css';

interface JobDetailsProps {
  job: EmploymentData;
}

export async function JobDetails({ job }: JobDetailsProps) {
  return (
    <article className={styles.job}>
      <div className={styles.years}>
        {job.yearStart} - {job.yearEnd ?? 'present'}
      </div>
      <div className={styles.jobinfo}>
        <div className={styles.emptitle}>
          {job.title} &middot; {job.company}
        </div>
        <ul>
          {job.duties?.map((duty, index) => (
            <li key={`duty-${job.company}-${index}`}>{duty}</li>
          ))}
        </ul>
        <div className={styles.skillslist}>
          {job.skills?.map((skillName, index) => {
            const skill = skillsData.find(sk => sk.name === skillName);

            return skill ? (
              <div key={`skill-${job.company}-${index}`} className={styles.skill}>
                {skill.label}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </article>
  );
}
