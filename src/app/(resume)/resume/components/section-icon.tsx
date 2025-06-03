import type { LucideIcon } from 'lucide-react';

import styles from './section-icon.module.css';

interface SectionIconProps {
  icon: LucideIcon;
}

export function SectionIcon({ icon: Icon }: SectionIconProps) {
  return (
    <div className={styles.circle}>
      <span className={styles.circleicon}>
        <Icon />
      </span>
    </div>
  );
}
