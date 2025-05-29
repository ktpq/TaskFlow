"use client";
import React from "react";

import MyCalendar from "./MyCalendar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

export default function Calendar() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <main className="grow px-7 py-7 ml-[290px]">
      {/* <button className="px-2 rounded-lg hover:bg-gray-300 duration-200 border"> Back </button> */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-3xl mt-5 mb-3 font-extrabold"> Team calendar </h1>
        <p> View and manage your team's schedule </p>
      </div>
    </main>
  );
}
