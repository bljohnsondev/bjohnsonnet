import { getEmployment } from '@/lib/data-loader';

import styles from './employment-section.module.css';
import { JobDetails } from './job-details';

export async function EmploymentSection() {
  const jobs = await getEmployment();

  return (
    <section>
      <h1 className="pagetitle">Experience</h1>
      <div className={styles.explist}>
        {jobs.map(job => (
          <JobDetails key={`job-${job.id}`} job={job} />
        ))}
      </div>
    </section>
  );
}
