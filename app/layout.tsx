import type { Metadata } from "next";
import "../styles/globals.css";
import HomePageNavbar from "../components/navbar/homePageNavbar";
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
      <body>
        <HomePageNavbar />
        {children}
      </body>
    </html>
  );
}
