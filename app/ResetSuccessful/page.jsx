import Link from "next/link";

function ResetSuccessful() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-[20px] bg-[#FFD700] rounded-full">
        <svg
          width="42"
          height="42"
          viewBox="0 0 56 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 24.5L17.5 38.5L52.5 3.5"
            stroke="#111827"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p className="text-2xl font-bold mt-5">Password reset</p>
      <p className="text-2xl font-bold">successful!</p>
      <p className=" mt-4">Kindly proceed to login with your new</p>
      <p className="">password</p>
      <Link
        href="/"
        className="mt-8 gap-1 flex items-center px-[6rem] py-2 bg-yellow-400 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Continue{" "}
        <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              className="mt-[.1rem]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 1.3335L13 4.00016M13 4.00016L10.3333 6.66683M13 4.00016L1 4.00016"
                stroke="#333333"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
      </Link>
    </div>
  );
}

export default ResetSuccessful;
