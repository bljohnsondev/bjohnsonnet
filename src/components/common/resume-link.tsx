import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

import styles from './resume-link.module.css';

interface ResumeLinkProps {
  url?: string;
}

export function ResumeLink({ url }: ResumeLinkProps) {
  if (!url) return null;

  return (
    <div className={styles.resumelink}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ArrowDownTrayIcon />
        Download Resume
      </a>
    </div>
  );
}
