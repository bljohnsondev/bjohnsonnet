import type { Metadata } from 'next';

import { getInfo, getResumeData } from '@/lib/data-loader';

import styles from './layout.module.css';

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  const info = await getInfo();
  const resumeData = await getResumeData();

  return {
    title: resumeData.pdfTitle ?? info.name,
    description: info.description,
  };
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <>
      <div className={styles.topline} />
      <main className={styles.main}>{children}</main>
    </>
  );
}
