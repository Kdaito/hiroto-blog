"use client";

import { useEffect, useRef } from "react";

export default function TopContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        console.log("helo");
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="relative z-1 w-full h-[100vh] overflow-hidden">
        <img
          ref={imageRef}
          src="/top.webp"
          alt="top"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="absolute left-0 right-0 mx-auto w-[400px] h-[100px] bg-[#000] top-[-100px] flex items-center justify-center rounded-t-xl">
          <h1 className="text-white text-2xl font-bold">Hiroto Blog.</h1>
        </div>
        <div className="py-20">{children}</div>
      </div>
    </div>
  );
}
