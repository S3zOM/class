import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Class Album",
  description: "A fun class album app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
