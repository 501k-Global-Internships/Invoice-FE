// pages/index.js
"use client";
import Link from "next/link";
import React, { useState } from "react";

const SendScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center mb-3">
        <div className="p-[20px] bg-[#FFD700] rounded-full">
          <svg
            width="34"
            height="34"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.4153 7.74622L8.68172 11.4232C8.78088 11.5843 8.93582 11.5825 8.99841 11.5738C9.06101 11.5651 9.2116 11.5267 9.26614 11.3439L12.1003 1.77184C12.1498 1.60265 12.0587 1.48737 12.0178 1.44647C11.9782 1.40556 11.8647 1.31818 11.7005 1.36466L2.12167 4.16965C1.94009 4.22294 1.90042 4.3754 1.89175 4.438C1.88307 4.50183 1.88059 4.65987 2.04111 4.76089L5.76022 7.0868L9.04613 3.76619C9.22648 3.58398 9.52086 3.58212 9.70368 3.76247C9.88651 3.94282 9.88775 4.23782 9.7074 4.42002L6.4153 7.74622ZM8.95013 12.5077C8.51878 12.5077 8.12338 12.2883 7.89036 11.9115L5.48759 8.01263L1.54846 5.54912C1.12393 5.28325 0.902065 4.80976 0.970857 4.3121C1.03903 3.81445 1.38051 3.41905 1.8602 3.27836L11.439 0.473378C11.8797 0.34447 12.3519 0.466561 12.6767 0.79007C13.0014 1.11668 13.1223 1.59388 12.9909 2.03639L10.1568 11.6078C10.0149 12.0893 9.61822 12.4296 9.1218 12.4959C9.06354 12.5033 9.00714 12.5077 8.95013 12.5077V12.5077Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="shadow-lg ring-1 ring-gray-100 ring-opacity-75 py-7 px-4 mb-[3rem] max-w-md w-full">
        <label htmlFor="email" className="">
          Email Address
        </label>
        <div className="flex items-center border-2 rounded p-2 mb-9">
          <span className="px-2 text-gray-500">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L8.8906 9.2604C9.5624 9.70827 10.4376 9.70827 11.1094 9.2604L19 4M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z"
                stroke="#BFBFBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75461 1.52148L12.2336 4.00048M12.2336 4.00048L9.75461 6.47948M12.2336 4.00048L1.07812 4.00048"
              stroke="black"
              strokeWidth="1.85925"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default SendScreen;
