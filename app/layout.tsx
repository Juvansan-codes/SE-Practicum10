import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Expense Tracker",
  description: "A simple expense tracker for a DevOps practicum"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
