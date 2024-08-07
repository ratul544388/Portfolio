import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import { fonts } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio"
  },
  description: "Hello there, welcome to  my portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(fonts, "font-inter")}>
        <Header />
        <main className="min-h-screen overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
