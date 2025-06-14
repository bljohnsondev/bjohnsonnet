import rawInfoData from '@/data/info.json';
import rawSkillsData from '@/data/skills.json';

import type { InfoData } from '@/types/info-data';
import type { Skill } from '@/types/skill';

export const infoData: InfoData = rawInfoData;
export const skillsData: Skill[] = rawSkillsData;
