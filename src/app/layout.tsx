import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Webpage",
  description: "Create My Webpage with Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
