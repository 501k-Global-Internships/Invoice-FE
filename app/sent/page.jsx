import Link from "next/link";
import Icon from "../Icon/Icon";


function sent() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-[20px] bg-[#FFD700] rounded-full">
        <Icon name="sendIcon" className="" />
        </div>
        <p className="text-2xl font-bold mt-4">Invoice sent successfully!</p>
        <p className="">Invoice sent to <span className="font-bold">kunlekoko@kbs.com</span></p>
        <Link href='/' className="mt-8 flex items-center px-[6rem] py-2 bg-yellow-400 text-black rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Continue <img src="/arrow.png" alt="arrow" className="mt-[.1rem] ml-[.6rem] w-3" />
        </Link>
        <p className='text-sm mt-7'>Download Invoice</p>
      </div>
    );
  }
  
  export default sent;
  