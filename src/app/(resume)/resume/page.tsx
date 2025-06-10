import { Braces, User } from 'lucide-react';

import { getInfo, getResumeData, getSkills } from '@/lib/data-loader';

import { ResumeSections } from './components/resume-sections';
import { SectionTitle } from './components/section-title';

import styles from './page.module.css';

export default async function Resume() {
  const info = await getInfo();
  const skills = await getSkills();
  const resumeData = await getResumeData();

  function getSkillName(skillShort: string): string | undefined {
    return skills.find(sk => sk.name === skillShort)?.label;
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
            <h1 className={styles.name}>{info.name}</h1>
            <span className={styles.title}>{resumeData.title}</span>
          </div>
        </header>
        <ResumeSections resume={resumeData} />
      </div>
      <div className={styles.rightcolumn}>
        <div>
          <SectionTitle icon={User}>Personal Info</SectionTitle>
          <div className={styles.infoitemlist}>
            {info.email && (
              <InfoItem title="Email">
                <a href={`mailto:${info.email}`}>{info.email}</a>
              </InfoItem>
            )}
            {info.websiteUrl && (
              <InfoItem title="Website">
                <a href={info.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(info.websiteUrl)}
                </a>
              </InfoItem>
            )}
            {info.linkedinUrl && (
              <InfoItem title="LinkedIn">
                <a href={info.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(info.linkedinUrl)}
                </a>
              </InfoItem>
            )}
            {info.githubUrl && (
              <InfoItem title="Github">
                <a href={info.githubUrl} target="_blank" rel="noopener noreferrer">
                  {stripHttps(info.githubUrl)}
                </a>
              </InfoItem>
            )}
          </div>
        </div>
        {resumeData.skills && (
          <div className={styles.infoskillslist}>
            <SectionTitle icon={Braces}>Skills</SectionTitle>
            <ul>
              {resumeData.skills.frontend?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {resumeData.skills.backend?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {resumeData.skills.database?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {resumeData.skills.tools?.map(skillShort => (
                <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
              ))}
              {resumeData.skills.methodologies?.map(skillShort => (
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
