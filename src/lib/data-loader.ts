import fs from 'node:fs/promises';
import path from 'node:path';

import { remark } from 'remark';
import html from 'remark-html';

import type { EmploymentData } from '@/types/employment-data';
import type { InfoData } from '@/types/info-data';
import type { ResumeData } from '@/types/resume-data';
import type { Skill } from '@/types/skill';

export async function readDataFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', filename);

  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    throw error;
  }
}

export async function readJsonFile<T>(filename: string): Promise<T> {
  const contents = await readDataFile(filename);
  return JSON.parse(contents) as T;
}

export async function getInfo(): Promise<InfoData> {
  return readJsonFile<InfoData>('info.json');
}

export async function getResumeData(): Promise<ResumeData> {
  return readJsonFile<ResumeData>('resume.json');
}

export async function getSkills(): Promise<Skill[]> {
  return readJsonFile<Skill[]>('skills.json');
}

export async function getEmployment(): Promise<EmploymentData[]> {
  const jobs = await readJsonFile<EmploymentData[]>('employment.json');

  // assign an incremental id for react keys purposes
  jobs.forEach((job, index) => {
    job.id = index + 1;
  });

  return jobs;
}

export async function getMarkdownContent(filename: string): Promise<string> {
  const contents = await readDataFile(filename);
  const mdtext = await remark().use(html).process(contents);
  return mdtext.toString();
}
