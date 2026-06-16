// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/src/components/SplashScreen";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Sky Nova Digitals",
  description: "We build software systems that grow with your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {/* Splash Screen handles its own "one-time" logic via SessionStorage */}
        <SplashScreen /> 
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}