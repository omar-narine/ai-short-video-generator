import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30}></Image>
        <h2 className="text-2xl font-bold">Video Gen</h2>{" "}
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
export default Header;
