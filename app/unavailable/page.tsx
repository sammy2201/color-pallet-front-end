"use client";
import React from "react";
import Link from "next/link";
import HomePageNavbar from "../../components/navbar/HomePageNavbar";

const Unavailable = () => {
  return (
    <div>
      <HomePageNavbar />
      <div className="mt-[40vh] text-center align-middle">
        <h1 className="text-2xl font-bold">Sorry, this page is unavailable</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We are trying to make this available as soon as possible.
        </p>
        <Link href="/">
          <button className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 cursor-pointer transition">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Unavailable;
