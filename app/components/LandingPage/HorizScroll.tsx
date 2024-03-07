"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./LandingPage.css";
import Image from "next/image";
import Link from "next/link";

function HorizScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer mt-12">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="flex gap-8 items-center justify-center">
              <div className="flex gap-2 flex-col">
                <h1 className="text-[2rem] mb-6 text-white flex items-center justify-start gap-2">
                  Are you a{" "}
                  <span className="text-purple-400 font-semibold relative inline">
                    tourist?
                  </span>
                </h1>
                <p className="w-[30vw] text-neutral-100">
                  CityBizScout is your ultimate companion for exploring new
                  cities. Discover the hottest restaurants, cozy hotels, and
                  hidden gems with ease, making your trip unforgettable.
                </p>
              </div>
              <img
                src={"/12.jpg"}
                width={400}
                height={900}
                className="rounded-md h-[60vh]"
                alt="image"
              />
            </div>
          </div>
          <div className="scroll-section">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-[3rem] text-center text-white">
                Learn, Improve, Explore!
              </h1>
              <p className="w-[50vw] text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                aliquid reiciendis labore sit beatae at id facere facilis
                expedita.
              </p>
              <Link
                href={"/login"}
                className="bg-slate-700 py-2 px-8 rounded-md rounded-tl-[3rem] rounded-br-[3rem] text-gray-100 transition hover:tracking-[0.25rem] text-sm"
              >
                Join Now!
              </Link>
            </div>
          </div>
          <div className="scroll-section">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-[3rem] text-center mt-12 text-white">
                View Demo Video
              </h1>
              <img
                src={"/9.jpg"}
                width={400}
                height={300}
                alt="image"
                className="rounded-md"
              />
              <Link href={"/"} className="px-8 py-4 text-[1.25rem] text-white">
                View Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizScroll;
