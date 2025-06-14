import { Braces, User } from 'lucide-react';

import { infoData, skillsData } from '@/lib/data-loader';

import { ResumeSections } from './components/resume-sections';
import { SectionTitle } from './components/section-title';

import styles from './page.module.css';

export default async function Resume() {
  function getSkillName(skillShort: string): string | undefined {
    return skillsData.find(sk => sk.name === skillShort)?.label;
  }

  function stripHttps(url: string): string {
    return url.replace(/^(http|https):\/\//, '');
  }

  return (
    <div className={styles.resumecontainer}>
      <div>
        <header className={styles.info}>
          <img src="/images/pic_resume_bw.png" alt="Me in Black and White" className={styles.face} />
          <div className={styles.infodesc}>
            <h1 className={styles.name}>{infoData.site?.name}</h1>
            <span className={styles.title}>{infoData.resume?.title}</span>
          </div>
        </header>
        <ResumeSections />
      </div>
      <div className={styles.rightcolumn}>
        <div>
          <SectionTitle icon={User}>Personal Info</SectionTitle>
          <div className={styles.infoitemlist}>
            {infoData.site?.email && (
              <InfoItem title="Email">
                <a href={`mailto:${infoData.site.email}`}>{infoData.site.email}</a>
              </InfoItem>
            )}
            {infoData.site?.websiteUrl && (
              <InfoItem title="Website">
                <a href={infoData.site.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(infoData.site.websiteUrl)}
                </a>
              </InfoItem>
            )}
            {infoData.site?.linkedinUrl && (
              <InfoItem title="LinkedIn">
                <a href={infoData.site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(infoData.site.linkedinUrl)}
                </a>
              </InfoItem>
            )}
            {infoData.site?.githubUrl && (
              <InfoItem title="Github">
                <a href={infoData.site.githubUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(infoData.site.githubUrl)}
                </a>
              </InfoItem>
            )}
          </div>
        </div>
        {infoData.resume?.skills && (
          <div className={styles.infoskillslist}>
            <SectionTitle icon={Braces}>Skills</SectionTitle>
            <ul>
              {infoData.resume.skills.frontend?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {infoData.resume.skills.backend?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {infoData.resume.skills.database?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {infoData.resume.skills.tools?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {infoData.resume.skills.methodologies?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

interface InfoItemProps {
  title: string;
  children: React.ReactNode;
}

function InfoItem({ title, children }: InfoItemProps) {
  return (
    <div className={styles.infoitem}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
