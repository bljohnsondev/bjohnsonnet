import clsx from 'clsx';
import { Building2, GraduationCap, ListCheck, Mail, SquareArrowOutUpRight } from 'lucide-react';

//import { Braces, User } from 'lucide-react';

//import { getInfo, getResumeData, getSkills } from '@/lib/data-loader';
import { getEmployment, getInfo, getResumeData, getSkills } from '@/lib/data-loader';

import { GithubIcon } from '@/icons/github-icon';
import { LinkedInIcon } from '@/icons/linkedin-icon';

import styles from './page.module.css';

export default async function Resume() {
  const info = await getInfo();
  const resumeData = await getResumeData();
  const jobs = await getEmployment();
  const skills = await getSkills();

  function getSkillName(skillShort: string): string | undefined {
    return skills.find(sk => sk.name === skillShort)?.label;
  }

  function stripHttps(url: string): string {
    return url.replace(/^(http|https):\/\//, '');
  }

  return (
    <>
      <header className={styles.header}>
        <h1>{info.name}</h1>
        <article>{resumeData.summary}</article>
        <section className={styles.summary}>
          {info.email && <LinkItem icon={<Mail size={16} />} label={info.email} url={`mailto:${info.email}`} />}
          {info.websiteUrl && (
            <LinkItem
              icon={<SquareArrowOutUpRight size={16} />}
              label={stripHttps(info.websiteUrl)}
              url={info.websiteUrl}
            />
          )}
          {info.linkedinUrl && (
            <LinkItem icon={<LinkedInIcon />} label={stripHttps(info.linkedinUrl)} url={info.linkedinUrl} />
          )}
          {info.githubUrl && <LinkItem icon={<GithubIcon />} label={stripHttps(info.githubUrl)} url={info.githubUrl} />}
        </section>
      </header>
      <section className={styles.resumesection}>
        <TitleWithIcon icon={<Building2 size={18} />} label="Work Experience" />
        {jobs.map(job => (
          <div key={`job-${job.id}`} className={styles.workxp}>
            <h3>{job.company}</h3>
            <div className={styles.workxptitle}>
              <span>{job.title}</span>
              <span>
                {job.monthStart} {job.yearStart} - {job.yearEnd ? `${job.monthEnd} ${job.yearEnd}` : 'Present'}
              </span>
            </div>
            {job.duties && (
              <ul>
                {job.duties.map(duty => (
                  <li key={`jdt-${job.id}-${duty}`}>{duty}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      {resumeData.education && (
        <section className={clsx(styles.resumesection, styles.education)}>
          <TitleWithIcon icon={<GraduationCap size={18} />} label="Education" />
          <h3>{resumeData.education.institution}</h3>
          <span>
            {resumeData.education.degree} in {resumeData.education.major}
          </span>
        </section>
      )}
      <section className={styles.resumesection}>
        <TitleWithIcon icon={<ListCheck size={18} />} label="Skills" />
        <ul className={styles.skillslist}>
          {resumeData.skills?.map(skillShort => (
            <li key={`isk-${skillShort}`}>{getSkillName(skillShort)}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

interface TitleWithIconProps {
  icon: React.ReactNode;
  label: string;
}

function TitleWithIcon({ icon, label }: TitleWithIconProps) {
  return (
    <h2 className={styles.title}>
      <span className={styles.iconwrapper}>{icon}</span>
      {label}
    </h2>
  );
}

interface LinkItemProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

function LinkItem({ icon, label, url }: LinkItemProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.summaryitem}>
      {icon}
      {label}
    </a>
  );
}
