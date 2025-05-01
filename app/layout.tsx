import type { Metadata } from "next";
import "../styles/globals.css";
import HomePageNavbar from "../components/navbar/homePageNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tone set",
  description: "Color pallete for website and apps",
  icons: {
    icon: "/favicon.ico", // path relative to the /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <HomePageNavbar />
        {children}
      </body>
    </html>
  );
}
