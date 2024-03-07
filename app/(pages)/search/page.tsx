"use client";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiBankLine } from "react-icons/ri";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { PiShoppingCartBold } from "react-icons/pi";
import { RiBeerLine } from "react-icons/ri";
import Card from "@/app/components/Card/Card";
import gsap from "gsap";
import SplitType from "split-type";
import "@/app/components/Animation.css";

const page = () => {
  const categories = [
    {
      icon: <IoFastFoodOutline size={26} />,
      name: "Some name",
      id: 1,
    },
    {
      icon: <RiBankLine size={26} />,
      name: "Some name",
      id: 2,
    },
    {
      icon: <MdOutlineLocalGasStation size={26} />,
      name: "Some name",
      id: 3,
    },
    {
      icon: <CiCoffeeCup size={26} />,
      name: "Some name",
      id: 4,
    },
    {
      icon: <PiShoppingCartBold size={26} />,
      name: "Some name",
      id: 5,
    },
    {
      icon: <RiBeerLine size={26} />,
      name: "Brewery",
      id: 5,
    },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 flex items-end justify-center h-[22.5rem] w-full ">
        <div className="flex flex-col ">
          <h1 className="text-white lg:text-[4rem] xl:text-[5.5rem] text-center tracking-[0.3rem] gradient font-bold opacity-1">
            Explore
          </h1>
          <h2 className="text-white text-[2rem] text-center">
            Places to visit
          </h2>
          <div className="flex gap-2 items-center justify-center  mt-8">
            <input
              type="text"
              className="shadow-lg w-[95vw] md:w-[50vw] bg-slate-800 rounded-full py-3 px-6 text-white border-2 border-slate-800 outline-none focus:outline-none focus:border-2 focus:border-slate-900/50"
              placeholder="Search places"
            />
            <button className="bg-purple-300 transition-all hover:bg-purple-300/[60%] cursor-pointer p-[14px] aspect-1 rounded-full">
              <FaSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="absolute top-[25rem] px-[5vw] 2xl:px-[10vw] flex flex-col items-center justify-center w-full">
        {/* CATEGORIES */}
        <div className="flex gap-6">
          {categories.map((category) => (
            <div
              className="p-3 bg-slate-200 cursor-pointer rounded-full relative"
              key={category.id}
            >
              {category.icon}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 w-full my-4 mt-16">
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
          <Card img="/1.jpg" title="Title" location="Salt Lake City, Utah" />
        </div>
      </div>
    </>
  );
};

export default page;
