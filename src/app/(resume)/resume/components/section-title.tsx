import type { LucideIcon } from 'lucide-react';

import { SectionIcon } from './section-icon';

import styles from './section-title.module.css';

interface SectionTitleProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function SectionTitle({ icon, children }: SectionTitleProps) {
  return (
    <div className={styles.sectiontitle}>
      <SectionIcon icon={icon} />
      <h2 className={styles.label}>{children}</h2>
    </div>
  );
}
