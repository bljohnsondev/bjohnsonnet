'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './toggle-theme.module.css';

export function ToggleTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // theme needs to be initialized on component load so data-theme can be read
    setTheme(document.documentElement.getAttribute('data-theme'));
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return theme ? (
    <Link href="" aria-label="Toggle Theme" onClick={handleClick} className={styles.themelink}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Link>
  ) : null;
}
