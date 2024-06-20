import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
        setIsMobile(false);
      } else {
        setIsOpen(false);
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Hamburger icon */}
      {/* <RxHamburgerMenu /> */}
      <div
        className="lg:hidden fixed top-3 left-2 z-50 cursor-pointer"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path d="M18.278 16.864a1 1 0 0 1-1.414 0L12 12.414l-4.864 4.86a1 1 0 0 1-1.414-1.414l5.28-5.28-5.28-5.28a1 1 0 0 1 1.414-1.414l4.864 4.86 4.864-4.86a1 1 0 0 1 1.414 1.414l-5.28 5.28 5.28 5.28a1 1 0 0 1 0 1.414z" />
          ) : (
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          )}
        </svg>
      </div>

      <div
        className={`lg:flex lg:flex-col bg-[#333333] text-white w-64 fixed top-0 left-0 h-full overflow-y-auto ease-in-out transition-all duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Blur background when sidebar is open */}
        {isOpen && isMobile && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar content */}
        <div className="mt-[2rem] ml-[2rem]">
          <div className="ml-4">
            <img src="/KBS.png" alt="Avatar" className="w-[6rem] mr-2" />
          </div>
          <nav className="space-y-4">
            <Link href="/payroll">
              <button className="px-4 py-2 rounded hover:bg-gray-700 flex items-center mt-2">
                <div className="w-2 mr-2">
                  <img src="/payrol.png" alt="payroll" />
                </div>
                Payroll
              </button>
            </Link>
            <Link href="/transactions">
              <button className="mt-[.6rem] flex items-center px-4 py-2 rounded hover:bg-gray-700">
                <div className="w-2 mr-2">
                  <img src="/tran.png" alt="transaction" />
                </div>
                Transaction
              </button>
            </Link>
            <Link href="/invoices">
              <button className="mt-[.6rem] px-4 py-2 lg:w-[9rem] text-start rounded bg-[#FFD700] text-black hover:bg-[#FFD7] flex items-center">
                <div className="w-2 mr-2">
                  <img src="/invo.png" alt="invoice" />
                </div>
                Invoice
              </button>
            </Link>
            <Link href="/reporting">
              <button className="mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 mr-2">
                  <img src="/report.png" alt="reporting" />
                </div>
                Reporting
              </button>
            </Link>
            <Link href="/settings">
              <button className="mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 mr-2">
                  <img src="/set.png" alt="settings" />
                </div>
                Settings
              </button>
            </Link>
            <Link href="/faqs">
              <button className="mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <svg
                  className="mr-2"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11383 3.5C3.38839 2.9174 4.12921 2.5 5.00003 2.5C6.1046 2.5 7.00003 3.17157 7.00003 4C7.00003 4.69972 6.36122 5.28754 5.49714 5.4533C5.22594 5.50532 5.00003 5.72386 5.00003 6M5 7.5H5.005M9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                FAQs
              </button>
            </Link>
          </nav>
        </div>
        <div className="flex-1 relative mt-[5rem]">
          <div className="relative p-4 bg-white text-xs rounded-3xl text-black mx-4 flex flex-col items-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src="/croo2.png"
                alt="croo"
                className="w-[3.5rem] mr-1 -mt-[1.8rem]"
              />
            </div>
            <div className="text-center mt-7">
              <div className="max-w-xs mx-auto">
                <p className="text-left">Are you</p>
                <p className="text-left">experiencing</p>
                <p className="text-left">problem creating</p>
                <p className="text-left">invoice?</p>
                <p className="text-left">Kindly contact</p>
                <p className="text-left">the Help Center</p>
                <Link href="/help">
                  <button className="block text-white mt-2 px-4 py-2 bg-black rounded hover:bg-gray-600">
                    Help Center
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
