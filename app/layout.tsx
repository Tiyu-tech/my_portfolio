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
  creator: "Tiyu Tech Solutions",
  publisher: "Tiyu Tech Solutions",
  category: "Technology, Web Development, Digital Marketing",
  title:
    "Tiyu Tech Solutions | Web Development, UI Design & Digital Marketing in Tamale Ghana",
  keywords: [
    // Brand Keywords
    "Tiyu Tech Solutions",
    "Tiyu Tech Solutions Ghana",
    "Tiyu Tech Solutions Tamale",
    "Tiyu Technologies",
    "Tiyu Web Development",

    // Web Development
    "web development",
    "website development",
    "professional website development",
    "custom website development",
    "modern website design",
    "responsive website development",
    "full stack web development",
    "frontend development",
    "backend development",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web application development",
    "business website development",

    "school website development",
    "hotel website development",

    // Location Based Web Development
    "web development in Tamale",
    "website development in Tamale",
    "website designer in Tamale",
    "web developer in Tamale",
    "best web developer in Tamale",
    "website design company in Tamale",
    "web design company Ghana",
    "web developer Ghana",
    "website developers Ghana",
    "professional website designer Ghana",

    // UI/UX Design
    "UI design",
    "UX design",
    "UI UX design",
    "mobile app UI design",
    "website UI design",
    "modern user interface design",
    "Figma UI design",
    "landing page design",
    "dashboard UI design",

    // Location Based UI Design
    "UI design in Tamale",
    "UX designer in Tamale",
    "UI UX designer Ghana",
    "Figma designer Ghana",
    "website interface designer Tamale",

    // Graphic Design
    "graphic design",
    "professional graphic design",
    "brand identity design",
    "logo design",
    "business branding",
    "social media graphics",
    "marketing graphics",
    "poster design",
    "flyer design",
    "creative graphic designer Ghana",

    // Location Based Graphic Design
    "graphic design in Tamale",
    "graphic designer in Tamale",
    "logo designer Tamale",
    "branding company Tamale",
    "graphic design company Ghana",

    // Digital Marketing
    "social media marketing",
    "digital marketing",
    "online marketing",
    "social media management",
    "content creation",
    "Facebook marketing",
    "Instagram marketing",
    "TikTok marketing",
    "business promotion Ghana",

    // Location Based Marketing
    "social media marketing in Tamale",
    "digital marketing agency Tamale",
    "social media manager Ghana",
    "marketing agency Tamale",

    // Business Intent Keywords
    "website for small business",
    "website developer for businesses",
    "affordable website design Ghana",
    "cheap website development Ghana",
    "website maintenance Ghana",
    "website redesign services",
    "hire web developer Ghana",
    "hire website designer Tamale",

    // Tech Stack Authority Keywords
    "React developer Ghana",
    "Next.js developer Ghana",
    "Tailwind CSS developer",
    "Supabase developer",
    "Node.js developer Ghana",
    "modern web technologies",
  ],
  description:
    "Tiyu Tech Solutions builds modern websites, web applications, UI designs, graphics and digital marketing solutions for businesses in Tamale, Ghana. We help brands grow online with professional websites and creative technology solutions.",
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
