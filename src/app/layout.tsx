import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskForge",
  description: "Um aplicativo de gerenciamento de tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
