import { infoData } from '@/lib/data-loader';

import styles from './employment-section.module.css';
import { JobDetails } from './job-details';

export async function EmploymentSection() {
  return (
    <section>
      <h1 className="pagetitle">Experience</h1>
      <div className={styles.explist}>
        {infoData.employment?.map(job => (
          <JobDetails key={`job-${job.company}-${job.monthStart}${job.monthEnd}`} job={job} />
        ))}
      </div>
    </section>
  );
}
