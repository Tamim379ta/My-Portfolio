import { DM_Sans } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import AosProvider from "@/provider/AosProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tamim Tahsan",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.className} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-black text-white">

        {/* Global animated background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <ShootingStars />
          <StarsBackground />
        </div>

        <Navbar />
        <AosProvider>
          <main className="flex-1">
            {children}
          </main>
        </AosProvider>
        <Footer />
      </body>
    </html>
  );
}