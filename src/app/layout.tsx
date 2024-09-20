import type { Metadata } from "next";
// font
import { Exo_2, Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Webpage",
  description: "Create My Webpage with Tailwind",
};

// font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo_2",
});

// className을 합칠 함수
export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cls(exo_2.variable, montserrat.variable)}>
        {children}
      </body>
    </html>
  );
}
