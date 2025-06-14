import { skillsData } from '@/lib/data-loader';

import styles from './resume-skill-section.module.css';

interface SkillSectionProps {
  title: string;
  skillNames?: string[];
}

export function SkillSection({ title, skillNames }: SkillSectionProps) {
  if (!skillNames || skillNames.length === 0) return null;

  const getSkillLabel = (skillShort: string): string | undefined => {
    return skillsData?.find(sk => sk.name === skillShort)?.label;
  };

  return (
    <div className={styles.skillsection}>
      <span>{title}:</span>
      <ul className={styles.skillslist}>
        {skillNames.map(skillName => (
          <li key={`${title}-${skillName}`}>{getSkillLabel(skillName)}</li>
        ))}
      </ul>
    </div>
  );
}
