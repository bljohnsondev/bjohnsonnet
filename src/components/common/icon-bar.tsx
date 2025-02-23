import { IconLink } from '@/components/common/icon-link';
import { GithubIcon } from '@/icons/github-icon';
import { LinkedInIcon } from '@/icons/linkedin-icon';

import styles from './icon-bar.module.css';

interface IconBarProps {
  githubUrl?: string;
  linkedinUrl?: string;
}

export function IconBar({ githubUrl, linkedinUrl }: IconBarProps) {
  return (
    <div className={styles.iconbar}>
      {githubUrl && (
        <IconLink title="GitHub" ariaLabel="GitHub" openTab href={githubUrl}>
          <GithubIcon />
        </IconLink>
      )}
      {linkedinUrl && (
        <IconLink title="LinkedIn" ariaLabel="LinkedIn" openTab href={linkedinUrl}>
          <LinkedInIcon />
        </IconLink>
      )}
    </div>
  );
}
