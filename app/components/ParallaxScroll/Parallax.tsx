"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimention from "@/app/hooks/useDimention";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const Parallax = () => {
  const container = useRef(null);
  const { height } = useDimention();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="main px-12 py-8">
      <div className="spacer h-[100vh]"></div>
      <div
        ref={container}
        className="gallery h-[175vh] bg-slate-700 flex flex-row gap-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="spacer h-[100vh]"></div>
    </div>
  );
};

export default Parallax;

const Column = ({ images, y = 0 }: { images: any; y?: any }) => {
  return (
    <div className="my-column w-[25%] h-[100%] flex flex-col gap-[2vw]">
      {images.map((src: string, index: number) => {
        return (
          <motion.div
            style={{ y }}
            key={index}
            className="h-[100%] w-[100%] relative object-cover rounded-lg overflow-hidden"
          >
            <Image src={`/${src}`} fill alt="image" />
          </motion.div>
        );
      })}
    </div>
  );
};
