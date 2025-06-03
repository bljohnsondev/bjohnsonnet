import type { Metadata } from 'next';

import { getInfo } from '@/lib/data-loader';

import 'open-props/style';
import 'open-props/normalize';
import 'open-props/colors-hsl';
import 'open-props/theme.light.switch.min.css';
import 'open-props/theme.dark.switch.min.css';

import '@/styles/globals.css';
import '@/styles/headless.css';
import '@/styles/toast.css';
import '@/styles/themes.css';

export async function generateMetadata(): Promise<Metadata> {
  const info = await getInfo();

  return {
    title: info.name,
    description: info.description,
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
