import { CircleArrowDown } from 'lucide-react';

import styles from './resume-link.module.css';

interface ResumeLinkProps {
  url?: string;
}

export function ResumeLink({ url }: ResumeLinkProps) {
  if (!url) return null;

  return (
    <div className={styles.resumelink}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CircleArrowDown />
        Download Resume
      </a>
    </div>
  );
}
