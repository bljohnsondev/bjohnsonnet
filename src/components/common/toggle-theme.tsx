'use client';

//import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './toggle-theme.module.css';

export function ToggleTheme() {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    // theme needs to be initialized on component load so data-theme can be read
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme) setTheme(dataTheme);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return theme ? (
    <Link href="" aria-label="Toggle Theme" onClick={handleClick} className={styles.themelink}>
      {theme === 'dark' ? <Sun fill="currentColor" /> : <Moon fill="currentColor" />}
    </Link>
  ) : (
    <div>NUNYA</div>
  );
}
