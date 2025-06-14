import { infoData } from '@/lib/data-loader';

import styles from './about-section.module.css';

export async function AboutSection() {
  return (
    <section>
      <h1 className="pagetitle">About</h1>
      <div className={styles.aboutmd}>
        {infoData.site?.about?.map((about, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <p key={`about-${index}`}>{about}</p>
        ))}
      </div>
    </section>
  );
}
