"use client";
import { IoLocationOutline } from "react-icons/io5";

const Card = ({
  img,
  title,
  location,
}: {
  img: string;
  title: string;
  location: string;
}) => {
  return (
    <div className="w-full bg-white h-[40vh] rounded-[1rem] overflow-hidden relative">
      <img src={img} alt="" className="h-full w-full object-fit" />
      <div className="absolute bottom-2 mx-auto w-[90%] mx-[5%] z-[2] bg-white/[40%] py-2 text-center rounded-md backdrop-blur-md">
        <label className=" text-black font-semibold text-lg">{title}</label>
        <div className="flex items-center justify-center gap-2 text-sm">
          <IoLocationOutline size={20} />
          {location}
        </div>
      </div>
    </div>
  );
};

export default Card;
