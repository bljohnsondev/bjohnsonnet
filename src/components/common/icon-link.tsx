import clsx from 'clsx';
import Link from 'next/link';

import styles from './icon-link.module.css';

interface IconLinkProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  openTab?: boolean;
  selected?: boolean;
  children: React.ReactNode;
}

export function IconLink({ href, title, ariaLabel, openTab = false, selected = false, children }: IconLinkProps) {
  return openTab ? (
    <Link href={href} passHref legacyBehavior>
      <a
        aria-label={ariaLabel}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx({ [styles.iconlink]: true, [styles.iconselected]: selected })}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={title}
      className={clsx({ [styles.iconlink]: true, [styles.iconselected]: selected })}
    >
      {children}
    </Link>
  );
}
