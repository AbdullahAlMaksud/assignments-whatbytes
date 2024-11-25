import RightSidebar from "@/components/dashboard/RighSidebar";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Skill Test | WhatBytes",
  description: "Skill Testing Platform by WhatBytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar className="bg-green-100" />
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-60">
            <RightSidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
