import type { Metadata } from "next";
import { Roboto, Bitcount } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
//bitcount google font import
export const bitcount = Bitcount({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Tiyu Tech Solutions",
  keywords: [
    "web development",
    "UI design",
    "Graphic Design",
    "Social Media Marketing",
    "Tiyu Tech Solutions",
    "Website Development in Tamale",
    "UI Design in Tamale",
    "Graphic Design in Tamale",
    "Social Media Marketing in Tamale",
  ],
  description:
    "Tiyu Tech Solutions is a tech company in Tamale Ghana that provides web development, UI design,Graphic Design/Printing and social media marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${bitcount.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
