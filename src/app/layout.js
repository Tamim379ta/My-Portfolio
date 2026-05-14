import {  Playwrite_GB_S } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";



const playwrite = Playwrite_GB_S({
  subsets: ["latin"],
})

export const metadata = {
  title: "Tamim Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playwrite.className} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-black text-white">

        {/* Global animated background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ShootingStars />
          <StarsBackground />
        </div>

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}