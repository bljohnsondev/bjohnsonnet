import clsx from 'clsx';
import React from 'react';

import styles from './split-section.module.css';

interface SplitSectionLeftProps {
  className?: string;
  children?: React.ReactNode;
}

export function SplitSectionLeft({ className, children }: SplitSectionLeftProps) {
  return <div className={clsx(styles.left, className)}>{children}</div>;
}

interface SplitSectionRightProps {
  className?: string;
  children?: React.ReactNode;
}

export function SplitSectionRight({ className, children }: SplitSectionRightProps) {
  return <div className={clsx(styles.right, className)}>{children}</div>;
}

interface SplitSectionProps {
  children?: React.ReactNode;
}

function SplitSection({ children }: SplitSectionProps) {
  let leftContent: React.ReactNode | null = null;
  let rightContent: React.ReactNode | null = null;

  // interate over the children to find the left and right content elements
  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === SplitSectionLeft) {
        leftContent = child;
      } else if (child.type === SplitSectionRight) {
        rightContent = child;
      }
    }
  });

  return (
    <div className={styles.splitcontent}>
      {leftContent}
      {rightContent}
    </div>
  );
}

SplitSection.Left = SplitSectionLeft;
SplitSection.Right = SplitSectionRight;

export { SplitSection };
