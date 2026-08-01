"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingComponent() {
  return (
    <div className="text-2xl font-bold">
      <Typewriter
        options={{
          strings: [
            "Website Developer.",
            "Designer.",
            "Social media Marketing",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
