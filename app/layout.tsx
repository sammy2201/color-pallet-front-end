import type { Metadata } from "next";
import "../styles/globals.css";
import HomePageNavbar from "../components/navbar/HomePageNavbar";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tone set",
  description: "Color palette for website and apps",
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
    // <html
    //   lang="en"
    //   className="bg-[#FCFCFC] dark:bg-black text-black dark:text-white">
    //   <body className={`min-h-screen ${inter.className}`}>
    //     <HomePageNavbar />
    //     {children}
    //   </body>
    // </html>

    <html suppressHydrationWarning lang="en">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <HomePageNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
