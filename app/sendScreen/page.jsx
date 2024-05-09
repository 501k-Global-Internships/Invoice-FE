// pages/index.js
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "../Icon/Icon";

const SendScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center mb-3">
        <div className="p-[20px] bg-[#FFD700] rounded-full">
        <Icon name="sendIcon" className="" />
        </div>
      </div>
      <div className="shadow-lg ring-1 ring-gray-100 ring-opacity-75 py-7 px-4 mb-[3rem] max-w-md w-full">
        <label htmlFor="email" className="">
          Email Address
        </label>
        <div className="flex items-center border-2 rounded p-2 mb-9">
          <span className="px-2 text-gray-500">
          <Icon name="email" className="" />
          </span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g leronaldio@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none w-full"
          />
        </div>
      </div>
      <Link href="/sent">
        <button className="flex gap-2 items-center bg-[#FFD700] text-black px-4 py-2 rounded-sm hover:bg-yellow-600">
          Continue
          <Icon name="arrowRight" className="" />
        </button>
      </Link>
    </div>
  );
};

export default SendScreen;
