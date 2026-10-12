import Hero from '@/components/sections/hero';
import BentoOverview from '@/components/sections/bento-overview';
import Skills from '@/components/sections/skills';
import ProjectsOverview from '@/components/sections/projects-overview';
import ProjectExplorer from '@/components/projects/project-explorer';
import CurrentFocus from '@/components/sections/current-focus';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoOverview />
      <ProjectsOverview />
      <ProjectExplorer />
      <Skills />
      <CurrentFocus />
      <Contact />
    </>
  );
}
