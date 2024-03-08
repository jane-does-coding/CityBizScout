"use client";
import { getPlaceData } from "@/app/rapidAPI";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface PlaceData {
  name: string;
  description: string;
  ranking: string;
  rating: number;
  website_url: string;
  address: string;
  photo: {
    images: {
      large: { url: string };
      small: { url: string };
    };
  };
  reviews: {
    title: string;
    summary: string;
    author: string;
    rating: number;
  }[];
  awards: {
    display_name: string;
    year: string;
  }[];
  meal_types: {
    key: string;
    name: string;
  }[];
}

interface IParams {
  location_id?: string;
}

const Page = ({ params }: { params: IParams }) => {
  const [data, setData] = useState<PlaceData | null>(null);
  const location_id = params.location_id;
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      const result: PlaceData = await getPlaceData(location_id);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {data ? (
        <>
          <div className="md:w-3/5 p-6 px-4">
            <h1 className="text-xl font-semibold text-[3.5rem] text-white mb-2 mt-24 leading-[4rem]">
              {data.name}
            </h1>
            <div className="flex gap-[2px] text-white mb-4">
              {[...Array(Math.round(Number(data.rating)))].map((_, i) => (
                <FaStar size={22} key={i} />
              ))}
              {[...Array(5 - Math.round(Number(data.rating)))].map((_, i) => (
                <FaRegStar size={22} key={i} />
              ))}
            </div>
            {data.photo ? (
              <img
                src={data.photo.images.large.url}
                alt=""
                className="w-full rounded-lg"
              />
            ) : null}
            <p className="text-slate-100 text-[1.25rem] my-4">
              {data.description}
            </p>
            {data.ranking && (
              <p className="text-purple-300 font-semibold py-2 w-full border-l-4 border-white bg-slate-100/[15%] pl-4 rounded-tr-full rounded-br-full">
                {data.ranking}
              </p>
            )}

            {data.website_url && (
              <p className="text-gray-500">Website: {data.website_url}</p>
            )}
            {data.meal_types &&
              data.meal_types.map((meal_type, index) => (
                <div key={index}>
                  <p className="text-gray-500">{meal_type.name}</p>
                </div>
              ))}
            {data.awards &&
              data.awards.map((award) => (
                <div key={award.display_name}>
                  <p className="text-gray-500">{award.display_name}</p>
                  <p className="text-gray-500">{award.year}</p>
                </div>
              ))}
            <p className="text-gray-500">{data.address}</p>
          </div>
          <div className="md:w-2/5 p-6 bg-slate-800/25 pt-20 h-screen overflow-y-auto md:fixed right-0">
            <h2 className="text-[1.5rem] text-purple-300 text-center font-semibold mb-4">
              Reviews
            </h2>
            {data.reviews &&
              data.reviews.map((review, index) => (
                <div key={index} className="mb-6">
                  <p className="font-medium text-white flex items-center justify-between">
                    {review.title}
                    <span>{review.author}</span>
                  </p>
                  <p className="text-slate-400/75 text-sm my-[2px]">
                    {review.summary}
                  </p>
                  <div className="flex gap-[1px] text-white">
                    {[...Array(Math.round(Number(review.rating)))].map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                    {[...Array(5 - Math.round(Number(review.rating)))].map(
                      (_, i) => (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="p-6 bg-white rounded-xl shadow-md">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Page;
