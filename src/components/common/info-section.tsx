import type { InfoData } from '@/types/info-data';

import styles from './info-section.module.css';

interface InfoSectionProps {
  info: InfoData;
}
export function InfoSection({ info }: InfoSectionProps) {
  return (
    <section className={styles.infosection}>
      <h1 className={styles.name}>{info.name}</h1>
      <div className={styles.title}>{info.title}</div>
      <div className={styles.company}>{info.company}</div>
      <div className={styles.department}>{info.department}</div>
      <div className={styles.summary}>{info.summary}</div>
    </section>
  );
}
