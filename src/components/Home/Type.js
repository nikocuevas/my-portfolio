import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Test Automation Lead",
          "Test Automation Trainer",
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
