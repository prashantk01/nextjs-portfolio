import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // Import Navbar
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Prashant Kumar | Portfolio",
  description:
    "Welcome to my personal portfolio website showcasing my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#212A31] text-white font-sans antialiased">
        <Navbar /> {/* Add Navbar here */}
        <main className="pt-16 px-4 md:px-8">{children}</main>{" "}
        {/* Add padding for navbar */}
        <Analytics /> {/* Add Analytics here to enable Vercel Analytics */}
      </body>
    </html>
  );
}
