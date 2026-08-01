"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import TypingComponent from "./TypeWriter";
function HeroSection() {
  return (
    <div className="flex-col font-extrabold align-center justify-center p-5 relative min-h-dvh z-10 text-black bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRlNzcwbTlqeWh1a2ZvZzdtaXFtMzNtNGsxc3Q4Z2htYXhkcHg5YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgC2RzpbE7vBZ6M/giphy.gif')] bg-cover bg-center bg-no-repeat">
      <p className="hero-header text-6xl max-w-190 text-center mt-15 flex-col ">
        Hello my name is Tiyumba <i> from Tiyu Tech</i>
        <b>
          <TypingComponent />
        </b>
        <Button className={"w-1.5xl"}> My Services</Button>
      </p>
    </div>
  );
}

export default HeroSection;
