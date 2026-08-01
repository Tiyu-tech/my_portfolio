"use client";
import { roboto } from "@/app/layout";
import TechnologyMarquee from "./TechnologyMarquee";
function AboutSection() {
  return (
    <section
      className={`${roboto.className} min-h-screen bg-gradient-to-b  from-slate-950 to-slate-900 flex-col items-center px-6`}
    >
      <div className="max-w-4xl mx-auto text-center p-3">
        <h2 className="text-4xl md:text-5xl font-bold text-white ">About Me</h2>

        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />

        <p className="mt-8 text-lg md:text-xl leading-9 text-slate-300">
          I&apos;m a passionate web developer helping businesses and individuals
          establish a strong online presence through{" "}
          <span className="font-semibold text-cyan-400">
            professional websites
          </span>{" "}
          and modern web applications. I combine clean development practices
          with thoughtful design to create experiences that are both visually
          appealing and easy to use. My goal is to build digital products that
          not only look great but also help clients reach more customers and
          grow their businesses.
        </p>
      </div>
      <div className="marquee-container">
        <TechnologyMarquee />
      </div>
    </section>
  );
}

export default AboutSection;
