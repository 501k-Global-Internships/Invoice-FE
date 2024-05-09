"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon/Icon";
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
            <Icon name="bell" className="" />
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
              <Icon name="printInvoice" className="" />
              </div>
              Print Invoice
            </button>
            <button className="flex gap-2 items-center bg-white px-4 py-2 rounded-md border border-black text-xs font-semibold hover:bg-gray-100 transition-colors duration-200">
              <div>
              <Icon name="exportInvoice" className="" />
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
              <Icon name="dropDown" className="" />
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none text-xs text-gray-400 border border-gray-400 font-medium px-4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 pr-8">
                <option className="text-xs">Last 30 days</option>
                <option className="text-xs">Last 60 days</option>
                <option className="text-xs">Last 90 days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Icon name="dropDown" className="" />
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
                  <Icon name="checkBox" className="" />
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
                        <Icon name="checkBox" className="" />
                        <Icon name="avatar" className="" />
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
                        <Icon name="action" className="" />
                      </button>
                      {showDropdown === index && (
                        <div className="absolute right-0 mt-2 py-4 px-4 mr-3 bg-white shadow-md rounded-md z-10">
                          <button className="flex w-full gap-2 mb-1 mt-2 items-center text-[#8DED85] px-2 text-sm hover:bg-gray-100">
                          <Icon name="edit" className="" />
                            Edit/Resend
                          </button>
                          <button className="flex items-center w-full mb-1 gap-2 text-[#F5D563] px-2 text-sm hover:bg-gray-100">
                          <Icon name="notify" className="" />
                            Notify
                          </button>
                          <Link href="/delete">
                            <button className="flex items-center gap-2 w-full px-2 text-sm text-[#FB4545] hover:bg-gray-100">
                            <Icon name="delete" className="" />
                              Delete
                            </button>
                          </Link>
                          <button className="flex items-center gap-2 w-full text-sm text-[#FFD700] py-1 px-2 hover:bg-gray-100">
                          <Icon name="download" className="" />
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
          <Icon name="leftPagination" className="" />
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
          <Icon name="rightPagination" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllInvoice;
