export interface FocusItem {
  title: string;
  description: string;
  stage: string;
  updatedAt: string;
}

export const currentFocus: FocusItem[] = [
  {
    title: 'Agentfolio Portfolio',
    description: 'Building a premium, visually distinctive developer portfolio with a command palette, interactive project explorer, and a three-theme design system.',
    stage: 'In Progress',
    updatedAt: '2026-10-10',
  },
  {
    title: 'Telegram AI Gateway',
    description: 'Expanding message routing, multi-model support, and improving webhook reliability for real-time responses.',
    stage: 'Active Development',
    updatedAt: '2026-09-28',
  },
];
