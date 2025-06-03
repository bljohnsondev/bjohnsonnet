import { ToastContainer } from 'react-toastify';

import { IconBar } from '@/components/common/icon-bar';
import { InfoSection } from '@/components/common/info-section';
import { NavSection } from '@/components/common/nav-section';
import { ResumeLink } from '@/components/common/resume-link';
import { ToggleTheme } from '@/components/common/toggle-theme';
import { getInfo } from '@/lib/data-loader';

import styles from './layout.module.css';
import { navItems } from './nav-items';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const info = await getInfo();

  return (
    <div className={styles.topcontainer}>
      <aside className={styles.themecontainer}>
        <ToggleTheme />
      </aside>
      <div className={styles.container}>
        <div className={styles.splitgrid}>
          <header className={styles.infocontainer}>
            <InfoSection info={info} />
            <NavSection items={navItems} />
            <section className={styles.resumebar}>
              <ResumeLink url={info.resumeUrl} />
            </section>
            <section className={styles.iconbar}>
              <IconBar githubUrl={info.githubUrl} linkedinUrl={info.linkedinUrl} />
            </section>
          </header>
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} closeOnClick hideProgressBar />
    </div>
  );
}
