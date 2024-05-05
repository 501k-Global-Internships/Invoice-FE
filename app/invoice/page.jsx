"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Link from "next/link";
const InvoiceForm = () => {
  // Define the state for storing the dropped image file
  const [imageFile, setImageFile] = useState(null);
  // Define the onDrop function to handle file drops
  const onDrop = (acceptedFiles) => {
    // Update the imageFile state with the dropped file
    setImageFile(acceptedFiles[0]);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement form validation and submission logic here
    // (e.g., send data to an API route)
  };
  //  invoice summary
  return (
    <div className="flex w-full">
      {/* paid invoice section */}
      <div className="md:w-1/6 bg-black text-white">
        <div className="mt-[3rem] ml-[2rem]">
          <div className="ml-4">
            <img src="/KBS.png" alt="Avatar" className="w-[6rem] mr-2" />
          </div>
          <div className="text-sm mt-[5.5rem]">
            <Link href="/payroll">
              <button className="block px-4 py-2 rounded hover:bg-gray-700">
                Payroll
              </button>
            </Link>
            <Link href="/transactions">
              <button className="block mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700">
                Transaction
              </button>
            </Link>
            <Link href="/invoices">
              <button className="block mt-[.6rem] px-4 py-2 lg:w-[9rem] text-start rounded bg-[#FFD700] text-black hover:bg-[#FFD7]">
                Invoice
              </button>
            </Link>
            <Link href="/reporting">
              <button className="block mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700">
                Reporting
              </button>
            </Link>
            <Link href="/settings">
              <button className="block mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700">
                Settings
              </button>
            </Link>
            <Link href="/faqs">
              <button className="block mt-[.6rem] px-4 py-2 rounded hover:bg-gray-700">
                FAQs
              </button>
            </Link>
          </div>
          <div className="relative p-[1.5rem] bg-white text-sm rounded-3xl text-black mr-[2rem] mt-[119.8rem]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src="/croo2.png"
                alt="coorq"
                className="w-[3.5rem] mr-2 -mt-[1.8rem]"
              />
            </div>
            <div className="ml-5">
              <div className="mt-3">
                <p>Are you</p>
                <p>experiencing</p>
                <p>problem creating</p>
                <p>invoice?</p>
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
      </div>
      {/* Invoice form section */}
      <div className="flex flex-col mt-[11rem] ml-[2rem] w-[75rem]">
        <div className="mb-4">
        <Link href='/' className="flex gap-2 items-center text-2xl">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L1 8M1 8L8 1M1 8L19 8"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Create new invoice
          </Link>
        </div>
        <div className="flex justify-between mb-7">
          <div className="mt-[6rem]">
            <h3 className="text-xl">Invoice From</h3>
            <p className="text-gray-500">Enter your details as the sender</p>
          </div>
          {/* Dropzone component */}
          <div className="flex bg-gray-200 border-gray-400 border text-center rounded-md w-1/3">
            <Dropzone onDrop={onDrop} accept="image/*" multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps({
                    className:
                      "p-4 flex flex-col justify-center items-center w-full",
                  })}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center mt-[3rem]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_2614_2818"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.000488281 0H19.9601V19.9498H0.000488281V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_2614_2818)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.65049 1.5C3.12949 1.5 1.50049 3.227 1.50049 5.899V14.051C1.50049 16.724 3.12949 18.45 5.65049 18.45H14.3005C16.8275 18.45 18.4605 16.724 18.4605 14.051V5.899C18.4605 3.227 16.8275 1.5 14.3005 1.5H5.65049ZM14.3005 19.95H5.65049C2.27049 19.95 0.000488281 17.579 0.000488281 14.051V5.899C0.000488281 2.371 2.27049 0 5.65049 0H14.3005C17.6855 0 19.9605 2.371 19.9605 5.899V14.051C19.9605 17.579 17.6855 19.95 14.3005 19.95Z"
                          fill="#AFB1B6"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.28126 15.1799C3.09526 15.1799 2.91026 15.1119 2.76526 14.9739C2.46426 14.6899 2.45226 14.2139 2.73726 13.9149L4.26526 12.3019C5.07426 11.4429 6.43926 11.4009 7.30226 12.2109L8.26026 13.1829C8.52726 13.4529 8.96126 13.4579 9.22926 13.1939C9.33026 13.0749 11.5083 10.4299 11.5083 10.4299C11.9223 9.92789 12.5063 9.61789 13.1553 9.55389C13.8053 9.49689 14.4363 9.68589 14.9393 10.0989C14.9823 10.1339 15.0213 10.1679 17.2173 12.4229C17.5063 12.7189 17.5013 13.1939 17.2043 13.4829C16.9083 13.7739 16.4323 13.7649 16.1433 13.4689C16.1433 13.4689 14.0943 11.3659 13.9483 11.2239C13.7933 11.0969 13.5443 11.0229 13.2993 11.0469C13.0503 11.0719 12.8263 11.1909 12.6673 11.3839C10.3433 14.2029 10.3153 14.2299 10.2773 14.2669C9.41926 15.1089 8.03426 15.0949 7.19126 14.2349C7.19126 14.2349 6.26126 13.2909 6.24526 13.2719C6.01426 13.0579 5.60226 13.0719 5.35526 13.3329L3.82526 14.9459C3.67726 15.1019 3.47926 15.1799 3.28126 15.1799Z"
                        fill="#AFB1B6"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.55769 6.12891C6.00469 6.12891 5.55469 6.57891 5.55469 7.13291C5.55469 7.68691 6.00469 8.13791 6.55869 8.13791C7.11269 8.13791 7.56369 7.68691 7.56369 7.13291C7.56369 6.57991 7.11269 6.12991 6.55769 6.12891ZM6.55869 9.63791C5.17769 9.63791 4.05469 8.51391 4.05469 7.13291C4.05469 5.75191 5.17769 4.62891 6.55869 4.62891C7.94069 4.62991 9.06369 5.75391 9.06369 7.13291C9.06369 8.51391 7.93969 9.63791 6.55869 9.63791Z"
                        fill="#AFB1B6"
                      />
                    </svg>
                    <div className="text-gray-600 text-sm text-center mt-3">
                      <p className="mb-1">Upload or drag your brand</p>
                      <p>logo here</p>
                    </div>
                  </div>
                  {imageFile && (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Uploaded preview"
                    />
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        </div>
        {/* form section */}
        <div className="shadow-xl border-t rounded-l ">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2 mt-4 ml-5"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g Adamo Nosiru Olamilekan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-md rounded p-2 mb-4 ml-5 w-[38rem] focus:outline-none"
            />
            <label htmlFor="email" className="mb-2 ml-5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g leronaldo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded p-2 mb-4 ml-5 w-[50rem] focus:outline-none"
            />
          </form>
        </div>
        {/* Custors Information */}
        <div className="mt-[3rem]">
          <div className="mb-[1.2rem]">
            <h1 className="text-xl">Your Customer's Information</h1>
            <h2>Enter the recipient's details</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-4 space-y-4 border-t shadow-xl rounded-l"
          >
            <label htmlFor="email" className="ml-5">
              Customer's Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" rounded p-2 w-[38rem] ml-5 border-2 focus:outline-none"
            />
            <label htmlFor="billingAddress" className="ml-5 mt-3">
              Billing Address
            </label>
            <textarea
              id="billingAddress"
              name="billingAddress"
              placeholder="e.g Suite 10, Admiralty Way, Victoria Island, Lagos State, Nigeria"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="border-2 rounded p-2 h-24 w-[64rem] ml-5 focus:outline-none"
            />
            <label htmlFor="phoneNumber" className="block ml-5">
              Telephone Number
            </label>
            <div className="flex items-center border-2 rounded p-2 w-[50rem] ml-5">
              <span className="px-2 text-gray-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3C1 1.89543 1.89543 1 3 1H6.27924C6.70967 1 7.09181 1.27543 7.22792 1.68377L8.72574 6.17721C8.88311 6.64932 8.66938 7.16531 8.22427 7.38787L5.96701 8.5165C7.06925 10.9612 9.03878 12.9308 11.4835 14.033L12.6121 11.7757C12.8347 11.3306 13.3507 11.1169 13.8228 11.2743L18.3162 12.7721C18.7246 12.9082 19 13.2903 19 13.7208V17C19 18.1046 18.1046 19 17 19H16C7.71573 19 1 12.2843 1 4V3Z"
                    stroke="#BFBFBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="e.g 090xxxxxxx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className=" focus:outline-none"
              />
            </div>
            <label htmlFor="email" className="w-[34rem] ml-5">
              Email Address
            </label>
            <div className="flex items-center border-2 rounded p-2 w-[50rem] ml-5 mb-9">
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
                className="focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="mt-[4rem] mb-[3rem]">
          <h1 className="text-xl">Invoice Details</h1>
          <h2 className="text-gray-600">Enter the details of your invoice</h2>
        </div>
        {/* Invoice Form section */}
        <div className="shadow-xl border-t rounded-l  p-9 mb-8">
          <div className="mb-[3.2rem] ">
            <label htmlFor="invoiceTitle" className="block text-black mb-2">
              Invoice title
            </label>
            <input
              type="text"
              id="invoiceTitle"
              className="shadow appearance-none w-[34rem] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g Payment for 2 units of Dell E7240 laptops"
            />
          </div>
          <div className="mb-[3.2rem]">
            <label htmlFor="paymentCurrency" className="block text-black mb-2">
              Payment currency
            </label>
            <select
              id="paymentCurrency"
              className="shadow appearance-none border rounded w-[34rem] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option className="text-gray-600">e.g US Dollar</option>
              <option className="text-gray-600">e.g US Dollar</option>
            </select>
          </div>
          <div className="flex mb-4">
            <div className="mr-4 flex-1">
              <label
                htmlFor="itemDescription"
                className="block text-black mb-2"
              >
                Item Description
              </label>
              <input
                type="text"
                id="itemDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g US Dollar"
              />
            </div>
            <div className="mr-4 flex-1">
              <label htmlFor="qty" className="block text-text-black mb-2">
                Qty
              </label>
              <input
                type="text"
                id="qty"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g US Dollar"
              />
            </div>
            <div className="mr-4 flex-1">
              <label htmlFor="price" className="block text-black mb-2">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g US Dollar"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="amount" className="block text-text-black mb-2">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g US Dollar"
              />
            </div>
          </div>
          <div className="mb-4">
            <button className=" hover:bg-gray-200 text-black  py-2 px-4 rounded">
              + Add item
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="block text-black mb-2">
              Additional Information (Optional)
            </label>
            <textarea
              id="additionalInfo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g Suite 10, Admiralty Way, Victoria Island, Lagos State, Nigeria"
            ></textarea>
          </div>
          <hr className="mt-[2.4rem] mb-[2.2rem]" />
          <div className="mb-4">
            <h3 className="text-black text-2xl mb-2">
              Receiving Account Details
            </h3>
            <div className="flex mb-2">
              <div className="flex mr-4 flex-1">
                <label htmlFor="accountName" className="block text-black mb-2">
                  Account name
                </label>
                <input
                  type="text"
                  id="accountName"
                  className="shadow appearance-none border rounded w-[13rem] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3"
                  placeholder="e.g KBM Enterprise"
                />
              </div>
              <div className="flex mr-4 flex-1">
                <label
                  htmlFor="accountNumber"
                  className="block text-black mb-2"
                >
                  Account number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  className="shadow appearance-none border rounded w-[13rem] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="e.g KBM Enterprise"
                />
              </div>
              <div className="flex flex-1">
                <label htmlFor="bankName" className="block text-black mb-2">
                  Bank name
                </label>
                <input
                  type="text"
                  id="bankName"
                  className="shadow appearance-none border rounded w-[13rem] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3"
                  placeholder="e.g KBM Enterprise"
                />
              </div>
            </div>
          </div>
          <hr className="mt-[2.4rem] mb-[2.2rem]" />
          <div className="flex gap-[4rem]">
            <div>
              <label htmlFor="issuedDate" className="block text-black mb-2">
                Issued date
              </label>
              <input
                type="date"
                id="issuedDate"
                className="appearance-none border-gray-300 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="2024-03-12"
              />
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-black mb-2">
                Due date
              </label>
              <input
                type="date"
                id="dueDate"
                className="border-gray-300 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="2024-03-12"
              />
            </div>
          </div>
        </div>
        {/* Invoice Summary section */}
        <div className="bg-white shadow-xl border-solid rounded-l p-6">
          <div className="flex justify-between mr-[.9rem]">
            <h2 className="text-xl text-black mb-4">Invoice summary</h2>
            <div className="">
              <span className="mr-[6.7rem]">Sub-total:</span>
              <span>$400.00</span>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-end mb-2 mr-[.9rem]">
            <label htmlFor="discount" className="flex items-center mr-[1.5rem]">
              Discount
            </label>
            <input
              type="text"
              id="discount"
              placeholder="%"
              className="w-[8.6rem] mr-[2rem] border border-gray-300 text-end rounded-md px-2 py-1 focus:outline-none"
            />
            <input
              type="text"
              id="discount"
              placeholder=""
              className="border shadow-2xl rounded-md px-2 py-1 w-[8.6rem] focus:outline-none"
            />
          </div>
          <div className="flex justify-end mb-4 mr-[.9rem]">
            <label htmlFor="tax" className="flex items-center mr-[3.9rem]">
              Tax
            </label>
            <input
              type="text"
              id="tax"
              placeholder="%"
              className="w-[8.6rem] mr-[2rem] border border-gray-300 text-end rounded-md px-2 py-1 focus:outline-none"
            />
            <input
              type="text"
              id="discount"
              placeholder=""
              className="w-[8.6rem] border rounded-md px-2 py-1 focus:outline-none"
            />
          </div>
          <hr className="mt-[1.3rem] mb-[1.3rem]" />
          <div className="flex justify-end text-black mr-[.9rem]">
            <div className="mr-[6.6rem]">
              <span>Total:</span>
            </div>
            <span>$400.00</span>
          </div>
        </div>
        <div className="flex justify-between mt-[3rem] mb-[2rem]">
          <button className="bg-white hover:bg-gray-400 text-black border-black border py-2 px-4 rounded-sm mr-2">
            Save as draft
          </button>
          <Link href='/invoicePreview' className="flex gap-2 bg-[#FFD700] hover:bg-gray-300 text-black py-2 px-4 rounded-sm">
            Proceed to review
            <div className="mt-[.6rem]">
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
                  stroke-width="1.85925"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
