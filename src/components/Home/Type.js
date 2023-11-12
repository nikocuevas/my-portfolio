import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software QA Automation Engineer",
          "Software Testing Trainer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: "natural",
        delay: 20,
      }}
    />
  );
}

export default Type;
