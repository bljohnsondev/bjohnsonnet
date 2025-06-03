import { AboutSection } from '@/components/home/about-section';
import { EmploymentSection } from '@/components/home/employment-section';

import styles from './page.module.css';

export default async function Home() {
  return (
    <div className={styles.pagecontainer}>
      <AboutSection />
      <EmploymentSection />
    </div>
  );
}
