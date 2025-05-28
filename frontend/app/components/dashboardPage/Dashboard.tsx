'use client'
import React from "react";

import { useEffect } from "react";

import Status from "./Status";
import TodayTask from "./TodayTask";
import UpcomingTask from "./UpcomingTask";
import "aos/dist/aos.css"
import AOS from "aos"

export default function Dashboard() {

  useEffect(() =>{
    AOS.init()
  })
  return (
    <main className="grow px-7 py-7 ml-[290px]">
      {/* <button className="px-2 rounded-lg hover:bg-gray-300 duration-200 border"> Back </button> */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-3xl mt-5 mb-3 font-extrabold"> My Dashboard </h1>
        <p> Welcome back, Alex! Here's your work for today. </p>
        <Status/>
        <TodayTask/>
        <UpcomingTask/>
      </div>

      

    </main>
  );
}
