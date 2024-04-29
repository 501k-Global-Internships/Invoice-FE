import Link from "next/link";
import React from "react";

function Delete() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4">
        <img
          src="/senticon.png"
          alt="senticon"
          className="rounded-full bg-yellow-400 items-center p-9"
          width={100}
          height={80}
        />
      </div>
      <p className="text-2xl font-bold mt-4">Invoice deleted</p>
      <p className="font-bold text-2xl">successfully!</p>
      <Link href='/'>
      <button className="mt-8 flex px-[6rem] py-2 bg-yellow-400 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        Continue <img src="/arrow.png" alt="arrow" className="mt-[.6rem] ml-[.6rem] w-3" />
      </button>
      </Link>
    </div>
  );
}

export default Delete;
