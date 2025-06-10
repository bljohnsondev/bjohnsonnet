import type { Skill } from '@/types/skill';

import styles from './resume-skill-section.module.css';

interface SkillSectionProps {
  title: string;
  allSkills: Skill[];
  skillNames?: string[];
}

export function SkillSection({ title, allSkills, skillNames }: SkillSectionProps) {
  if (!skillNames || skillNames.length === 0) return null;

  const getSkillLabel = (skillShort: string): string | undefined => {
    return allSkills.find(sk => sk.name === skillShort)?.label;
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
