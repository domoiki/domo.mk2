export interface SkillCategory {
  title: string;
  items: { label: string; icon?: string; accent?: string }[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    items: [
      { label: 'TypeScript', accent: 'blue' },
      { label: 'JavaScript', accent: 'yellow' },
      { label: 'Python' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React / Next.js', accent: 'blue' },
      { label: 'Tailwind CSS', accent: 'cyan' },
      { label: 'HTML & CSS', accent: 'violet' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { label: 'Node.js', accent: 'teal' },
      { label: 'REST APIs', accent: 'indigo' },
      { label: 'GraphQL', accent: 'magenta' },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { label: 'OpenAI / LLM APIs', accent: 'cyan' },
      { label: 'Telegram Bots', accent: 'blue' },
      { label: 'Workflow Automation', accent: 'violet' },
    ],
  },
  {
    title: 'Data & Storage',
    items: [
      { label: 'PostgreSQL', accent: 'teal' },
      { label: 'Firebase', accent: 'blue' },
      { label: 'LocalStorage / IndexDB' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git & GitHub', accent: 'indigo' },
      { label: 'VS Code', accent: 'blue' },
      { label: 'Docker', accent: 'cyan' },
    ],
  },
];
