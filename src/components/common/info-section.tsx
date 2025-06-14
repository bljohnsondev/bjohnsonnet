import type { InfoData } from '@/types/info-data';

import styles from './info-section.module.css';

interface InfoSectionProps {
  info: InfoData;
}

export function InfoSection({ info }: InfoSectionProps) {
  return (
    <section className={styles.infosection}>
      <h1 className={styles.name}>{info.site?.name}</h1>
      <div className={styles.tagline}>{info.site?.tagline}</div>
      <div className={styles.company}>
        {info.site?.title} at {info.site?.company}
      </div>
    </section>
  );
}
