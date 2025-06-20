import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        {" "}
        <SessionProvider>
          <Header />
          {children}
          <Footer />{" "}
        </SessionProvider>
      </body>
    </html>
  );
}
