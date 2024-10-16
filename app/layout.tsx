import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NavbarDemo} from "@/app/components/raviproject/navebar/navebar";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


<div className=" relative w-full flex items-center justify-center">
    <NavbarDemo/></div>
        {children}

      </body>
    </html>
  );
}
