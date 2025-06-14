import clsx from 'clsx';
import { Building2, GraduationCap, ListCheck, Mail, SquareArrowOutUpRight } from 'lucide-react';

import { SkillSection } from '@/components/common/resume-skill-section';
import { infoData } from '@/lib/data-loader';

import { GithubIcon } from '@/icons/github-icon';
import { LinkedInIcon } from '@/icons/linkedin-icon';

import styles from './page.module.css';

export default async function Resume() {
  function stripHttps(url: string): string {
    return url.replace(/^(http|https):\/\//, '');
  }

  return (
    <>
      <header className={styles.header}>
        <h1>{infoData.site?.name}</h1>
        <article>{infoData.resume?.summary}</article>
        <section className={styles.summary}>
          {infoData.site?.email && (
            <LinkItem icon={<Mail size={16} />} label={infoData.site.email} url={`mailto:${infoData.site.email}`} />
          )}
          {infoData.site?.websiteUrl && (
            <LinkItem
              icon={<SquareArrowOutUpRight size={16} />}
              label={stripHttps(infoData.site.websiteUrl)}
              url={infoData.site.websiteUrl}
            />
          )}
          {infoData.site?.linkedinUrl && (
            <LinkItem
              icon={<LinkedInIcon />}
              label={stripHttps(infoData.site.linkedinUrl)}
              url={infoData.site.linkedinUrl}
            />
          )}
          {infoData.site?.githubUrl && (
            <LinkItem icon={<GithubIcon />} label={stripHttps(infoData.site.githubUrl)} url={infoData.site.githubUrl} />
          )}
        </section>
      </header>
      <section className={styles.resumesection}>
        <TitleWithIcon icon={<Building2 size={18} />} label="Work Experience" />
        {infoData.employment?.map(job => (
          <div key={`job-${job.company}-${job.monthStart}${job.monthEnd}`} className={styles.workxp}>
            <h3>{job.company}</h3>
            <div className={styles.workxptitle}>
              <span>{job.title}</span>
              <span>
                {job.monthStart} {job.yearStart} - {job.yearEnd ? `${job.monthEnd} ${job.yearEnd}` : 'Present'}
              </span>
            </div>
            {job.duties && (
              <ul>
                {job.duties.map((duty, index) => (
                  <li key={`jdt-${job.company}-${index}`}>{duty}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      {infoData.resume?.skills && (
        <section className={styles.resumesection}>
          <TitleWithIcon icon={<ListCheck size={18} />} label="Skills" />
          <div className={styles.skillgroups}>
            <SkillSection title="Frontend" skillNames={infoData.resume?.skills?.frontend} />
            <SkillSection title="Backend" skillNames={infoData.resume?.skills?.backend} />
            <SkillSection title="Database" skillNames={infoData.resume?.skills?.database} />
            <SkillSection title="Tools" skillNames={infoData.resume?.skills?.tools} />
            <SkillSection title="Methodologies" skillNames={infoData.resume?.skills?.methodologies} />
          </div>
        </section>
      )}
      {infoData.resume?.education && (
        <section className={clsx(styles.resumesection, styles.education)}>
          <TitleWithIcon icon={<GraduationCap size={18} />} label="Education" />
          <h3>{infoData.resume.education.institution}</h3>
          <span>
            {infoData.resume.education.degree} in {infoData.resume.education.major}
          </span>
        </section>
      )}
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
