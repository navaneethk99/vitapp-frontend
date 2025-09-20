"use client";

import React, { useState } from "react";

type Pool = {
  id: number;
  pickup_location: string;
  drop_location: string;
  datetime: string;
};

const page = () => {
  //   const [pools, setPools] = useState<Pool[]>([]);
  const pools = [
    {
      id: 1,
      pickup_location: "Location A",
      drop_location: "Location B",
      datetime: "2023-10-01T10:00:00Z",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center items-top w-screen h-screen bg-white ">
        <div className="w-full ml-3 mt-5 flex">
          <h1 className="text-4xl font-bold text-gray-800">Carpool</h1>
          <div className="absolute text-white right-5 top-5 bg-black w-10 h-10 rounded-full text-center text-3xl items-center justify-center flex">
            +
          </div>
        </div>
        <div className="w-full h-full mt-5 p-5 pt-2">
          {pools.map((pool) => (
            <div
              key={pool.id}
              className="p-2 bg-gray-100 text-black rounded-md shadow flex justify-between w-full h-20"
            >
              {pool.pickup_location}
              <br />
              {pool.drop_location}
              <br />
              {pool.datetime}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
