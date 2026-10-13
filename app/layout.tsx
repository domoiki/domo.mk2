import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import CommandPalette from '@/components/ui/command-palette';
import AnimatedBackground from '@/components/ui/particle-background';
import WireframeGeometry from '@/components/ui/wireframe-geometry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agentfolio — Andri A.W (Domoiki)',
  description: 'Premium developer portfolio. I vibe-code things that actually run. AI-assisted development, practical applications, automation.',
  keywords: ['Andri A.W', 'Domoiki', 'portfolio', 'developer', 'AI', 'Next.js', 'React'],
  openGraph: {
    title: 'Agentfolio — Andri A.W',
    description: 'Premium developer portfolio. I vibe-code things that actually run.',
    type: 'website',
    url: 'https://agentfolio.local',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} ${instrumentSerif.variable}`}>
        <ThemeProvider>
          <AnimatedBackground />
          <WireframeGeometry />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
