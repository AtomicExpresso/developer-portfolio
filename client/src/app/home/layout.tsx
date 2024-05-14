import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/home-globals.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pumped dev",
  description: "Welcome to my porfilo! here you can view some of my public projects, blog, and more. Feel free to get in touch if you have any questions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
