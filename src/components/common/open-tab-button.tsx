'use client';

import { Button } from '@headlessui/react';
import { useCallback } from 'react';

import styles from './open-tab-button.module.css';

interface OpenTabButtonProps {
  href: string;
  icon?: boolean;
  children: React.ReactNode;
}

export function OpenTabButton({ href, icon = false, children }: OpenTabButtonProps) {
  const handleClick = useCallback(() => {
    window.open(href, '_blank', 'noopener,noreferrer');
  }, [href]);

  return (
    <Button onClick={handleClick} className={icon ? styles.iconbutton : styles.openbutton}>
      {children}
    </Button>
  );
}
