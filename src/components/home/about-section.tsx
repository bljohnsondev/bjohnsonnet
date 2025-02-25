import { getMarkdownContent } from '@/lib/data-loader';

import styles from './about-section.module.css';

export async function AboutSection() {
  const markdownContent = await getMarkdownContent('about.md');

  return (
    <section>
      <h1 className="pagetitle">About</h1>
      <div className={styles.aboutmd}>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: coming from controlled markdown so it's fine */}
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </div>
    </section>
  );
}
