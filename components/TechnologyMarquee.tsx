"use client";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiNodejsLine,
} from "react-icons/ri";

import {
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Bootstrap", icon: SiBootstrap },

  { name: "React", icon: RiReactjsFill },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: RiTailwindCssFill },

  { name: "Node.js", icon: RiNodejsLine },
  { name: "Express", icon: SiExpress },
  { name: "Prisma", icon: SiPrisma },
  { name: "Supabase", icon: SiSupabase },

  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
];

export default function TechnologyMarquee() {
  return (
    <section className="py-20 overflow-hidden">
      <h5 className="mb-12 text-center text-4xl font-bold text-white">
        Technologies I Use
      </h5>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400/10"
              >
                <Icon className="text-3xl text-cyan-400" />

                <span className="text-lg font-medium text-white">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
