import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google'; // Import optimized fonts
import './globals.css';
import Navigation from './components/Navigation';

// Configure Heading Font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins', // CSS variable for Tailwind
});

// Configure Body Font
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter', // CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: 'Sagar Pandey | DevOps Engineer',
  description: 'DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems.',
  keywords: ['DevOps', 'Cloud', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Nepal'],
  authors: [{ name: 'Sagar Pandey' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagar-pandey.dev',
    title: 'Sagar Pandey | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems.',
    siteName: 'Sagar Pandey Portfolio',
  },
};

export const viewport: Viewport = {
  themeColor: '#080808', // Darker black for premium feel
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font variables to the body. 
          'font-sans' will now use Inter by default.
      */}
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-[#080808] text-white antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}