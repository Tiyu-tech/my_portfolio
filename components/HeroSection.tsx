"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import TypingComponent from "./TypeWriter";
function HeroSection() {
  return (
    <div className="flex font-extrabold align-center flex-wrap justify-center p-6 relative min-h-dvh z-10 text-black bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRlNzcwbTlqeWh1a2ZvZzdtaXFtMzNtNGsxc3Q4Z2htYXhkcHg5YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgC2RzpbE7vBZ6M/giphy.gif')] bg-cover bg-center bg-no-repeat">
      <div className="hero-header font-bold text-6xl max-w-190 text-center mt-30 flex-col ">
        Hello my name is Tiyumba <i> from Tiyu Tech</i>
        <TypingComponent />
        <Button className={"w-1.5xl"}> My Services</Button>
      </div>
      <div className="image-container mt-5 ">
        <Image
          src={
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBvZzR0cHNwZXFpNjFraXdhOWVteTA2NHRpMzFwcW50d2c2MWlkeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
          }
          alt="Programmer working on Laptop animation"
          width={500}
          height={500}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default HeroSection;
