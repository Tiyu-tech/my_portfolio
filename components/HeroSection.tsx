"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import TypingComponent from "./TypeWriter";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRlNzcwbTlqeWh1a2ZvZzdtaXFtMzNtNGsxc3Q4Z2htYXhkcHg5YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgC2RzpbE7vBZ6M/giphy.gif')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/45 backdrop-brightness-75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 lg:flex-row">
        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Web Developer • UI Designer • Social Media Marketer • Graphic
            Designer
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Helping Businesses and People
            <br />
            Stand Out
            <span className="text-cyan-400"> Online.</span>
          </h1>

          <div className="mt-6 text-xl text-slate-200">
            <TypingComponent />
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            I build modern websites, designs and run Social Media Marketing
            campaigns that help businesses attract customers, increase
            credibility, and grow their online presence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link href="#work">
              {" "}
              <Button
                size="lg"
                className="bg-cyan-500 px-8 py-6 text-lg hover:bg-cyan-600"
              >
                View My Work
              </Button>{" "}
            </Link>

            <Link href={"#contact"}>
              {" "}
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-md hover:bg-white hover:text-slate-900"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-10 text-center lg:justify-start">
            <div>
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-slate-300">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">5+</h3>
              <p className="text-slate-300">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-slate-300">Responsive</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <Image
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBvZzR0cHNwZXFpNjFraXdhOWVteTA2NHRpMzFwcW50d2c2MWlkeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Programmer"
            width={520}
            height={520}
            className="rounded-full border-8 border-white/20 shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
