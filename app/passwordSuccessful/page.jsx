import Link from "next/link";

function PasswordSuccessful() {
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
      <p className="text-2xl font-bold mt-5">Password successfully</p>
      <p className="text-2xl font-bold">changed!</p>
      <p className=" mt-4">Kindly proceed to login with your new</p>
      <p className="">password</p>
      <Link
        href="/"
        className="mt-8 flex items-center px-[6rem] py-2 bg-yellow-400 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        Continue{" "}
        <img
          src="/arrow.png"
          alt="arrow"
          className="mt-[.1rem] ml-[.6rem] w-3"
        />
      </Link>
    </div>
  );
}

export default PasswordSuccessful;
