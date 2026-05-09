import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Station | AR, VR, AI, XR & Metaverse",
  description: "We forge ruthless AR, VR, and AI ecosystems to strip away the decay and force a new Metaverse dominance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}