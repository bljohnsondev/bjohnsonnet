'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavItem } from '@/types/nav-item';

import styles from './nav-section.module.css';

interface NavSectionProps {
  items: NavItem[];
}

export function NavSection({ items }: NavSectionProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {items.map((item, index) => (
        <Link key={`navitem-${index}`} href={item.url} className={clsx({ [styles.selected]: pathname === item.url })}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
