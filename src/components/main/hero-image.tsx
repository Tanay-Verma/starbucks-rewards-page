"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const HeroImageBanner = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[900px] sm:h-[500px]">
      <Image
        src="/hero-img-1.jpg"
        fill
        className="w-full md:h-40 h-20 object-cover absolute"
        alt="Hero image"
      />
      <div className="absolute text-white w-full mt-10 bg-black/50 py-4">
        <div className="flex flex-col justify-center md:items-start md:container items-center ">
          <span className="uppercase text-xl font-bold">free coffee</span>
          <span className="uppercase text-xl font-bold">is a tap away</span>
          <span className="my-3">Join now to start earning Rewards.</span>
          {windowWidth && windowWidth >= 1024 ? (
            <>
              <Button className="bg-[#148059] rounded-full font-bold">
                Join Now
              </Button>
              <small className="mt-3">
                Or <span className="underline">join in the app</span> for the
                best experience
              </small>
            </>
          ) : (
            <>
              <Button className="bg-[#148059] rounded-full font-bold">
                Join in the App
              </Button>
              <small className="underline mt-3">Or join online</small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroImageBanner;
