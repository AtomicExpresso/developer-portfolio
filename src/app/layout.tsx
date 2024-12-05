import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.scss'
import NavBar from '../componets/main/navBar';
import Footer from '../componets/main/footer';
import ScrollUp from '../componets/main/scrollBtn';
import VercelAnalytics from "@/componets/main/VercelAnalytics";

const inter = Inter({ subsets: ["latin"] });
//Default metadata
export const metadata: Metadata = {
  title: "Pumped dev",
  description: "Welcome to my porfolio! im a front-end developer and student",
};

//Default layout for all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="root">
        <VercelAnalytics />
        <NavBar/>
        <ScrollUp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
