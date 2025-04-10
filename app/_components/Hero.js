import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <div className="p-10 flex flex-col items-center justify-center mt-24">
      <h2 className="font-bold text-6xl text-center">
        AI Short Video Generator
      </h2>
      <p className="mt-4 text-2xl text-center text-gray-500">
        AI generates scripts, images, and voice overs in seconds. Create, edit,
        and publish engaging short content with ease
      </p>
      <div>
        <Button className="mt-7" size="large">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;
