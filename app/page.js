"use client";

import Link from "next/link";
import { useState } from "react";
const AllInvoice = () => {
  const [invoices, setInvoices] = useState([
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      id: "Invoice ID: #1234",
      status: "Paid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Paid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Paid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Unpaid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Unpaid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Unpaid",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Draft",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Draft",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Draft",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      id: "Invoice ID: #1234",
      status: "Overdue",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Overdue",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
    {
      client: "Lionel Ronaldo",
      invoiceId: "#1234",
      status: "Overdue",
      issuedDate: "17-Mar-2024",
      dueDate: "17-Mar-2024",
      amount: "₦ 200,000.00",
    },
  ]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    if (option === "Paid Invoice") {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === "Paid")
      );
    } else if (option === "Unpaid Invoice") {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === "Unpaid")
      );
    } else if (option === "Overdue Invoice") {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === "Overdue")
      );
    } else if (option === "Draft") {
      setFilteredInvoices(
        invoices.filter((invoice) => invoice.status === "Draft")
      );
    } else {
      setFilteredInvoices(invoices);
    }
  };

  const PaidIcon = () => (
    <div className={`bg-[#8DED85] rounded-full p-2`}>
      <svg
        width="22"
        height="21"
        className=" rounded-full"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75034 10.5003L9.917 12.667L14.2503 8.33367M6.48797 2.5888C7.2653 2.52677 8.00325 2.2211 8.59676 1.71531C9.98179 0.535 12.0189 0.535 13.4039 1.71531C13.9974 2.2211 14.7354 2.52677 15.5127 2.5888C17.3267 2.73356 18.7671 4.174 18.9119 5.98797C18.9739 6.7653 19.2796 7.50325 19.7854 8.09676C20.9657 9.48179 20.9657 11.5189 19.7854 12.9039C19.2796 13.4974 18.9739 14.2354 18.9119 15.0127C18.7671 16.8267 17.3267 18.2671 15.5127 18.4119C14.7354 18.4739 13.9974 18.7796 13.4039 19.2854C12.0189 20.4657 9.98179 20.4657 8.59676 19.2854C8.00325 18.7796 7.2653 18.4739 6.48797 18.4119C4.674 18.2671 3.23356 16.8267 3.0888 15.0127C3.02677 14.2354 2.7211 13.4974 2.21531 12.9039C1.035 11.5189 1.035 9.48179 2.21531 8.09676C2.7211 7.50325 3.02677 6.7653 3.0888 5.98797C3.23356 4.174 4.674 2.73356 6.48797 2.5888Z"
          stroke="#111827"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
  const UnpaidIcon = () => (
    <div className={`bg-[#FFF1BD] rounded-full p-2`}>
      <svg
        width="22"
        height="21"
        className=" rounded-full"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.83333 12.6667L11 10.5M11 10.5L13.1667 8.33333M11 10.5L8.83333 8.33333M11 10.5L13.1667 12.6667M20.75 10.5C20.75 15.8848 16.3848 20.25 11 20.25C5.61522 20.25 1.25 15.8848 1.25 10.5C1.25 5.11522 5.61522 0.75 11 0.75C16.3848 0.75 20.75 5.11522 20.75 10.5Z"
          stroke="#111827"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
  const OverdueIcon = () => (
    <div className='bg-[#FDB3B3] rounded-full p-2'>
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0006 7.25V9.41667M11.0006 13.75H11.0115M3.49509 18.0833H18.5062C20.1741 18.0833 21.2165 16.2778 20.3826 14.8333L12.877 1.83333C12.0431 0.388889 9.95821 0.388889 9.12426 1.83333L1.61871 14.8333C0.784756 16.2778 1.82719 18.0833 3.49509 18.0833Z"
          stroke="#111827"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
  const DraftIcon = () => (
    <div className={`bg-[#FC6565] rounded-full p-2`}>
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.28066 12.1363C5.98776 11.8434 5.51289 11.8434 5.22 12.1363C4.9271 12.4292 4.9271 12.9041 5.22 13.197L6.28066 12.1363ZM7.91699 14.8333L7.38666 15.3637C7.52731 15.5043 7.71808 15.5833 7.91699 15.5833C8.1159 15.5833 8.30667 15.5043 8.44732 15.3637L7.91699 14.8333ZM12.7807 11.0303C13.0735 10.7374 13.0735 10.2626 12.7807 9.96967C12.4878 9.67678 12.0129 9.67678 11.72 9.96967L12.7807 11.0303ZM15.8337 5.08333V18.0833H17.3337V5.08333H15.8337ZM14.417 19.5H3.58366V21H14.417V19.5ZM2.16699 18.0833V5.08333H0.666992V18.0833H2.16699ZM3.58366 3.66667H5.75033V2.16667H3.58366V3.66667ZM12.2503 3.66667H14.417V2.16667H12.2503V3.66667ZM3.58366 19.5C2.80126 19.5 2.16699 18.8657 2.16699 18.0833H0.666992C0.666992 19.6942 1.97283 21 3.58366 21V19.5ZM15.8337 18.0833C15.8337 18.8657 15.1994 19.5 14.417 19.5V21C16.0278 21 17.3337 19.6942 17.3337 18.0833H15.8337ZM17.3337 5.08333C17.3337 3.4725 16.0278 2.16667 14.417 2.16667V3.66667C15.1994 3.66667 15.8337 4.30093 15.8337 5.08333H17.3337ZM2.16699 5.08333C2.16699 4.30093 2.80126 3.66667 3.58366 3.66667V2.16667C1.97283 2.16667 0.666992 3.4725 0.666992 5.08333H2.16699ZM5.22 13.197L7.38666 15.3637L8.44732 14.303L6.28066 12.1363L5.22 13.197ZM8.44732 15.3637L12.7807 11.0303L11.72 9.96967L7.38666 14.303L8.44732 15.3637ZM7.91699 1.5H10.0837V5.96046e-08H7.91699V1.5ZM10.0837 4.33333H7.91699V5.83333H10.0837V4.33333ZM7.91699 4.33333C7.13459 4.33333 6.50033 3.69907 6.50033 2.91667H5.00033C5.00033 4.5275 6.30616 5.83333 7.91699 5.83333V4.33333ZM11.5003 2.91667C11.5003 3.69907 10.8661 4.33333 10.0837 4.33333V5.83333C11.6945 5.83333 13.0003 4.5275 13.0003 2.91667H11.5003ZM10.0837 1.5C10.8661 1.5 11.5003 2.13426 11.5003 2.91667H13.0003C13.0003 1.30584 11.6945 5.96046e-08 10.0837 5.96046e-08V1.5ZM7.91699 5.96046e-08C6.30616 5.96046e-08 5.00033 1.30584 5.00033 2.91667H6.50033C6.50033 2.13426 7.13459 1.5 7.91699 1.5V5.96046e-08Z"
          fill="#111827"
        />
      </svg>
    </div>
  );
  const invoiceData = [
    { status: "Paid", amount: 1200, icon: <PaidIcon /> }, // Add icon property
    { status: "Unpaid", amount: 1200, icon: <UnpaidIcon /> },
    {
      status: "Overdue",
      amount: 1200,
      color: "red-500",
      icon: <OverdueIcon />,
    },
    { status: "Draft", amount: 1200, icon: <DraftIcon /> },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  const [showDropdown, setShowDropdown] = useState(null);
  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };
  return (
    <div className="flex md:flex-row w-full md:max-w-[1440px] ">
      {/* paid invoice section */}
      <div className="md:w-1/5 items-center justify-center bg-black text-white px-4 p-3">
        <div className=" ml-[2rem]">
          <div className="ml-4">
            <img
              src="/KBS.png"
              alt="Avatar"
              className="w-[6rem] mr-2 bg-black"
            />
          </div>
          <div className="mt-[3rem] text-xs flex flex-col">
            <Link href="/payroll">
              <button className=" relative px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 text-white mr-2">
                  <img src="/payrol.png" alt="payrol" width={40} />
                </div>
                Dashboard
              </button>
            </Link>
            <Link href="/payroll">
              <button className=" relative px-4 py-2 rounded hover:bg-gray-700 flex items-center mt-2">
                <div className="w-2 mr-2">
                  <img src="/payrol.png" alt="payrol" width={40} />
                </div>
                Payroll
              </button>
            </Link>
            <Link href="/transactions">
              <button className=" mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 mr-2">
                  <img src="/tran.png" alt="transaction" width={40} />
                </div>
                Transaction
              </button>
            </Link>
            <Link href="/invoices">
              <button className=" mt-[.6rem] px-4 py-2 lg:w-[9rem] text-start rounded bg-[#FFD700] text-black hover:bg-[#FFD7] flex items-center">
                <div className="w-2 mr-2">
                  <img src="/invo.png" alt="payrol" width={40} />
                </div>
                Invoice
              </button>
            </Link>
            <Link href="/reporting">
              <button className=" mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 mr-2">
                  <img src="/report.png" alt="report" width={40} />
                </div>
                Reporting
              </button>
            </Link>
            <Link href="/settings">
              <button className=" mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
                <div className="w-2 mr-2">
                  <img src="/set.png" alt="payrol" width={40} />
                </div>
                Settings
              </button>
            </Link>
            <Link href="/faqs">
              <button className=" mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700 flex items-center">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                FAQs
              </button>
            </Link>
          </div>
        </div>
        <div className="relative p-[1.2rem] bg-gray-300 text-xs rounded-3xl text-black mt-[14.5rem] ml-4 mr-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <img
              src="/qc.png"
              alt="coorq"
              className="w-[3.5rem] mr-1 -mt-[1.8rem]"
            />
          </div>
          <div className="ml-4">
            <div className="mt-3">
              <p>Do you have any</p>
              <p>problem making</p>
              <p>payments or other</p>
              <p>transactions?</p>
              <p>Kindly contact</p>
              <p>the Help Center</p>
            </div>
            <Link href="/help">
              <button className="block text-white mt-2 px-4 py-2 bg-black rounded hover:bg-gray-600">
                Help Center
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* search invoice section */}
      <div className="text-black md:w-4/5 bg-white px-9 lg:w-full">
        <div className="flex justify-between mt-[2rem]">
          <div className="flex">
            <img
              src="/ava.png"
              alt="avata"
              className="w-8 h-8 rounded-full mr-2 bg-black"
            />
            <div>
              <p className="font-semibold text-xl">Adam Olah</p>
              <p className="">adam@kbs.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex mr-9">
              <input
                type="text"
                placeholder="Search invoices"
                className="px-[2rem] py-2 border w-[390px] border-gray-300 rounded-full ml-[1rem] pl-8"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="%23666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 8px center",
                  backgroundSize: "1.2rem",
                }}
              />
            </div>
            {/* New invoice */}
            <div className="mr-4">
              <Link
                href="/invoice"
                className="bg-yellow-400 text-black px-4 py-2 rounded-md mr-2"
              >
                + New Invoice
              </Link>
            </div>
            <div className="mr-3">
              <button>
                <img
                  src="/settingsIcon.png"
                  alt="settingsIcon"
                  className="w-5 mr-4"
                />
              </button>
            </div>
            <button className="bg-[#8DED85] rounded-full p-[1rem]">
              <svg
                width="18"
                height="20"
                className=" "
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Invoice Overview section */}
        <div className="pt-7 mt-[2rem]">
          <h1 className="mb-[1rem] text-2xl">Invoice overview</h1>
          <div className="flex flex-col bg-black p-4 rounded-md shadow-md mt-2">
            <div className="grid grid-cols-4 gap-4">
              {invoiceData.map((item) => (
                <div
                  key={item.status}
                  className="flex flex-col items-center bg-white p-6 rounded-md"
                >
                  <div className="flex items-center mb-2 mt-1">
                    {/* Render SVG icon directly */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div className="">
                      <div className="text-gray-600 text-xs">{item.status}</div>
                      <div className="text-xl font-bold ">{item.amount}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Client list section */}
        <div className="flex justify-between items-center py-6 rounded-md ">
          <h2 className="text-lg">Clients list</h2>
          <div className="flex space-x-4 mr-4">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md border border-black text-xs font-semibold hover:bg-gray-100 transition-colors duration-200">
              <div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 7.5H8.5C9.05229 7.5 9.5 7.05228 9.5 6.5V4.5C9.5 3.94772 9.05229 3.5 8.5 3.5H1.5C0.947715 3.5 0.5 3.94772 0.5 4.5V6.5C0.5 7.05228 0.947715 7.5 1.5 7.5H2.5M3.5 9.5H6.5C7.05228 9.5 7.5 9.05228 7.5 8.5V6.5C7.5 5.94772 7.05228 5.5 6.5 5.5H3.5C2.94772 5.5 2.5 5.94772 2.5 6.5V8.5C2.5 9.05228 2.94772 9.5 3.5 9.5ZM7.5 3.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5H3.5C2.94772 0.5 2.5 0.947715 2.5 1.5V3.5H7.5Z"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              Print Invoice
            </button>
            <button className="flex gap-2 items-center bg-white px-4 py-2 rounded-md border border-black text-xs font-semibold hover:bg-gray-100 transition-colors duration-200">
              <div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7L1 7.5C1 8.32843 1.67157 9 2.5 9L7.5 9C8.32843 9 9 8.32843 9 7.5L9 7M7 3L5 1M5 1L3 3M5 1L5 7"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              Export Invoice
            </button>
            <div className="relative">
              <select
                className="appearance-none bg-white px-4 py-3 rounded-md border font-medium border-black text-black text-xs hover:bg-gray-100 transition-colors duration-200 pr-8"
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
              >
                <option value="All Invoice">All Invoices</option>
                <option value="Paid Invoice">Paid Invoice</option>
                <option value="Unpaid Invoice">Unpaid Invoice</option>
                <option value="Overdue Invoice">Overdue Invoice</option>
                <option value="Draft">Draft</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none text-xs text-gray-400 border border-gray-400 font-medium px-4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 pr-8">
                <option className="text-xs">Last 30 days</option>
                <option className="text-xs">Last 60 days</option>
                <option className="text-xs">Last 90 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Client table section */}
        <div className="overflow-x-auto shadow-md rounded-md">
          <div className="rounded-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-black rounded-t-lg ">
                <tr className="text-sm text-white">
                  <th className="py-2 px-4 flex items-center">
                    <svg
                      className="h-6 w-4 mr-4"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.4"
                        y="0.9"
                        width="15.2"
                        height="15.2"
                        rx="2.8"
                        stroke="#949494"
                        strokeWidth="0.8"
                      />
                    </svg>
                    Client
                  </th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Issued Date</th>
                  <th className="py-2 px-4">Due Date</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {filteredInvoices.map((invoice, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 ml-9">
                      <div className="flex items-center">
                        <div className="mr-4 flex">
                          <svg
                            width="16"
                            className="mr-7"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.4"
                              y="0.9"
                              width="15.2"
                              height="15.2"
                              rx="2.8"
                              stroke="#949494"
                              strokeWidth="0.8"
                            />
                          </svg>
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.12104 16.3037C5.15267 15.1554 7.4998 14.5 10 14.5C12.5002 14.5 14.8473 15.1554 16.879 16.3037M13 8.5C13 10.1569 11.6569 11.5 10 11.5C8.34315 11.5 7 10.1569 7 8.5C7 6.84315 8.34315 5.5 10 5.5C11.6569 5.5 13 6.84315 13 8.5ZM19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
                              stroke="#333333"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <div>{invoice.client}</div>
                          <div className="text-sm text-gray-500">
                            Invoice ID: {invoice.invoiceId}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-[3rem]">{invoice.status}</td>
                    <td className="py-2 px-[3rem]">{invoice.issuedDate}</td>
                    <td className="py-2 px-[3rem]">{invoice.dueDate}</td>
                    <td className="py-2 px-[3rem]">
                      {invoice.amount.toLocaleString()}
                    </td>
                    <td className="py-2 px-[4rem] relative">
                      <button
                        className="hover:bg-gray-400 text-gray-800 py-1 px-2 rounded"
                        onClick={() => toggleDropdown(index)}
                      >
                        <svg
                          width="4"
                          height="19"
                          viewBox="0 0 4 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2.5L2 2.51M2 9.5L2 9.51M2 16.5L2 16.51M2 3.5C1.44772 3.5 1 3.05228 1 2.5C1 1.94772 1.44772 1.5 2 1.5C2.55228 1.5 3 1.94772 3 2.5C3 3.05228 2.55228 3.5 2 3.5ZM2 10.5C1.44771 10.5 1 10.0523 1 9.5C1 8.94772 1.44771 8.5 2 8.5C2.55228 8.5 3 8.94772 3 9.5C3 10.0523 2.55228 10.5 2 10.5ZM2 17.5C1.44771 17.5 0.999999 17.0523 0.999999 16.5C0.999999 15.9477 1.44771 15.5 2 15.5C2.55228 15.5 3 15.9477 3 16.5C3 17.0523 2.55228 17.5 2 17.5Z"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {showDropdown === index && (
                        <div className="absolute right-0 mt-2 py-4 px-4 mr-3 bg-white shadow-md rounded-md z-10">
                          <button className="flex w-full gap-2 mb-1 mt-2 items-center text-[#8DED85] px-2 text-sm hover:bg-gray-100">
                            <svg
                              width="14"
                              height="13"
                              viewBox="0 0 14 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.05878 2.3798H2.67277C1.92475 2.3798 1.31836 2.98619 1.31836 3.73421V11.1834C1.31836 11.9315 1.92475 12.5378 2.67277 12.5378H10.122C10.87 12.5378 11.4764 11.9315 11.4764 11.1834V7.79742M10.5187 1.42209C11.0476 0.893158 11.9052 0.893158 12.4341 1.42209C12.963 1.95102 12.963 2.80858 12.4341 3.33751L6.61979 9.15183H4.70438L4.70437 7.23641L10.5187 1.42209Z"
                                stroke="#8DED85"
                                strokeWidth="0.677203"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Edit/Resend
                          </button>
                          <button className="flex items-center w-full mb-1 gap-2 text-[#F5D563] px-2 text-sm hover:bg-gray-100">
                            <svg
                              width="13"
                              height="14"
                              viewBox="0 0 13 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.76759 10.5629H12.1536L11.2022 9.61145C10.9442 9.35343 10.7992 9.00347 10.7992 8.63857V6.49966C10.7992 4.73051 9.66853 3.22544 8.09039 2.66765V2.43644C8.09039 1.68842 7.484 1.08203 6.73598 1.08203C5.98797 1.08203 5.38158 1.68842 5.38158 2.43644V2.66765C3.80343 3.22544 2.67277 4.73051 2.67277 6.49966V8.63857C2.67277 9.00347 2.52781 9.35343 2.26978 9.61145L1.31836 10.5629H4.70437M8.76759 10.5629V11.2401C8.76759 12.3621 7.85801 13.2717 6.73598 13.2717C5.61396 13.2717 4.70437 12.3621 4.70437 11.2401V10.5629M8.76759 10.5629H4.70437"
                                stroke="#F5D563"
                                strokeWidth="0.677203"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Notify
                          </button>
                          <Link href="/delete">
                            <button className="flex items-center gap-2 w-full px-2 text-sm text-[#FB4545] hover:bg-gray-100">
                              <svg
                                width="14"
                                height="12"
                                viewBox="0 0 14 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.99503 3.52717H11.4759M1.99503 3.52717C1.24701 3.52717 0.640625 2.92078 0.640625 2.17277C0.640625 1.42475 1.24701 0.818359 1.99503 0.818359H11.4759C12.2239 0.818359 12.8303 1.42475 12.8303 2.17277C12.8303 2.92078 12.2239 3.52717 11.4759 3.52717M1.99503 3.52717L1.99503 10.2992C1.99503 11.0472 2.60142 11.6536 3.34944 11.6536H10.1215C10.8695 11.6536 11.4759 11.0472 11.4759 10.2992V3.52717M5.38105 6.23598H8.08986"
                                  stroke="#FB4545"
                                  strokeWidth="0.677203"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Delete
                            </button>
                          </Link>
                          <button className="flex items-center gap-2 w-full text-sm text-[#FFD700] py-1 px-2 hover:bg-gray-100">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.31836 9.00213L1.31836 9.67933C1.31836 10.8014 2.22794 11.7109 3.34997 11.7109L10.122 11.7109C11.244 11.7109 12.1536 10.8014 12.1536 9.67933L12.1536 9.00212M9.4448 6.29331L6.73598 9.00212M6.73598 9.00212L4.02717 6.29331M6.73598 9.00212L6.73598 0.875687"
                                stroke="#FFD700"
                                strokeWidth="0.677203"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Download
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-[2rem] mb-7">
          <button className="bg-white text-gray-700 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className=" text-gray-500 px-3 py-2 hover:bg-gray-100 transition-colors duration-200">
            1
          </button>
          <button className=" text-gray-500 px-3 py-2 hover:bg-gray-100 transition-colors duration-200">
            2
          </button>
          <button className=" text-black px-3 py-2 rounded-md border-black border hover:bg-gray-100 transition-colors duration-200">
            3
          </button>
          <button className=" text-gray-500 px-3 py-2 hover:bg-gray-100 transition-colors duration-200">
            4
          </button>
          <button className=" text-gray-500 px-3 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
            5
          </button>
          <button className=" text-black px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllInvoice;
