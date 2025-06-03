'use client';

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getStorageVar, setStorageVar } from '@/utils';

import styles from './toggle-theme.module.css';

export function ToggleTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (!theme) {
      const existingTheme = getStorageVar('theme') ?? 'light';
      setTheme(existingTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    setStorageVar('theme', newTheme);
  }

  return theme ? (
    <Link href="" aria-label="Toggle Theme" onClick={handleClick} className={styles.themelink}>
      {theme === 'dark' ? <Sun fill="currentColor" /> : <Moon fill="currentColor" />}
    </Link>
  ) : null;
}
