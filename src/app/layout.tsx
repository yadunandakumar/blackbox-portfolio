import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'BLACKBOX // Cybersecurity Operating System | Yadunanda Kumar Murari',
  description:
    'Classified cyber laboratory of Yadunanda Kumar Murari — Cybersecurity Student, CTF Player, Aspiring SOC Analyst. Secure systems. Offensive mindset. Defensive precision.',
  keywords: [
    'cybersecurity',
    'portfolio',
    'Yadunanda Kumar Murari',
    'SOC Analyst',
    'CTF',
    'VAPT',
    'secure coding',
    'Java',
    'password manager',
  ],
  authors: [{ name: 'Yadunanda Kumar Murari' }],
  openGraph: {
    title: 'BLACKBOX // Cyber OS',
    description: 'Premium cybersecurity portfolio — classified laboratory aesthetic.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cyber-black text-cyber-white antialiased">
        {children}
      </body>
    </html>
  );
}
