import Link from 'next/link';

import styles from './icon-link.module.css';

interface IconLinkProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  openTab?: boolean;
  children: React.ReactNode;
}

export function IconLink({ href, title, ariaLabel, openTab = false, children }: IconLinkProps) {
  return openTab ? (
    <Link href={href} passHref legacyBehavior>
      <a aria-label={ariaLabel} title={title} target="_blank" rel="noopener noreferrer" className={styles.iconlink}>
        {children}
      </a>
    </Link>
  ) : (
    <Link href={href} aria-label={ariaLabel} title={title} className={styles.iconlink}>
      {children}
    </Link>
  );
}
