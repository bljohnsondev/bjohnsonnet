import type { Metadata } from 'next';

import { infoData } from '@/lib/data-loader';

import styles from './layout.module.css';

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: infoData.resume?.pdfTitle ?? infoData.site?.name,
    description: infoData.site?.description,
  };
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return <main className={styles.main}>{children}</main>;
}
