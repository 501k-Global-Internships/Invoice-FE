import React from "react";

function InvoiceDeleted() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="rounded-full p-4">
        <img
          src="/Delete.png"
          alt="delete"
          className="rounded-full bg-yellow-400 items-center p-3"
          width={85}
          height={100}
        />
      </div>
      <p className="text-2xl font-bold mt-4">Invoice deleted </p>
      <p className="font-bold text-2xl">successfully! </p>
      <button className="mt-8 flex px-[6rem] py-2 bg-yellow-400 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        Continue <img src="/arrow.png" alt="arrow" className="mt-[.6rem] ml-[.6rem] w-3" />
      </button>
    </div>
  );
}

export default InvoiceDeleted;
