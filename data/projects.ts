export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  purpose: string;
  solution: string;
  features: string[];
  status: 'Live' | 'In Progress' | 'Archived';
  category: string;
  stack: string[];
  coverImage?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'telegram-ai-gateway',
    title: 'Telegram ⇄ AI Gateway',
    tagline: 'Bridge Telegram chats with AI models via a unified gateway',
    description: 'A gateway service that connects Telegram conversations to AI models, enabling automated responses, content generation, and intelligent message routing.',
    purpose: 'Make AI accessible through a messaging interface people already use daily.',
    solution: 'Built a lightweight gateway that handles Telegram webhook events, routes messages to configured AI endpoints, and streams responses back with low latency.',
    features: [
      'Real-time message routing',
      'Multi-model support',
      'Web-based configuration',
      'Conversation history tracking',
    ],
    status: 'In Progress',
    category: 'AI / Automation',
    stack: ['TypeScript', 'Node.js', 'Telegram Bot API', 'OpenAI', 'Next.js'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/domoiki/telegram-ai-gateway',
    featured: true,
  },
  {
    id: 'p2',
    slug: 'synx-absensi',
    title: 'Synx Absensi',
    tagline: 'Modern attendance and workforce tracking',
    description: 'A workforce attendance management system designed for practical daily use in small-to-medium organizations.',
    purpose: 'Simplify attendance tracking without complicated enterprise overhead.',
    solution: 'Clean interface for check-in/check-out, reporting, and admin oversight with minimal friction.',
    features: [
      'Check-in / check-out flow',
      'Daily reports',
      'Admin dashboard',
    ],
    status: 'Live',
    category: 'Business Tools',
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    demoUrl: 'https://synx-absensi.vercel.app',
    repoUrl: 'https://github.com/domoiki/synx-absensi',
    featured: true,
  },
  {
    id: 'p3',
    slug: 'synx-joyo',
    title: 'Synx Joyo',
    tagline: 'Collaborative workspace for focused work',
    description: 'A focused workspace tool that helps individuals and small teams organize work, track progress, and maintain momentum.',
    purpose: 'Provide a calm, focused environment for getting work done without the noise of enterprise suites.',
    solution: 'Minimal interface with structured sections for tasks, notes, and quick actions.',
    features: [
      'Task organization',
      'Quick notes',
      'Progress tracking',
    ],
    status: 'Live',
    category: 'Productivity',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    demoUrl: 'https://synx-joyo.vercel.app',
    repoUrl: 'https://github.com/domoiki/synx-joyo',
    featured: false,
  },
  {
    id: 'p4',
    slug: 'savelink',
    title: 'SaveLink',
    tagline: 'Bookmark and organize links that matter',
    description: 'A lightweight link-saving tool for collecting, tagging, and revisiting web references quickly.',
    purpose: 'Keep useful links organized without relying on browser bookmarks or external services.',
    solution: 'Simple storage with tags and quick search.',
    features: [
      'Bookmark links',
      'Tag organization',
      'Quick search',
      'No external account needed',
    ],
    status: 'In Progress',
    category: 'Utility',
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'LocalStorage'],
    repoUrl: 'https://github.com/domoiki/savelink',
    featured: false,
  },
];
