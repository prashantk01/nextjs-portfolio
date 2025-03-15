import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // Import Navbar

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
        <main className="pt-16">{children}</main> {/* Add padding for navbar */}
      </body>
    </html>
  );
}
