import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Patidar — Digital Creator",
  description: "A cinematic portfolio, studio and learning platform by Akshat Patidar."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}