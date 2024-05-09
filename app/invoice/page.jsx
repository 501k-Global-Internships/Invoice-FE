"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Link from "next/link";
import Icon from "../Icon/Icon";
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
            <img src="/KBS.png" alt="kbs logo" className="w-[6rem] mr-2" />
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
        <Icon name="arrowLeft" className="" />
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
                  <Icon name="uploadImg" className="" />
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
              <Icon name="telephone" className="" />
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
              <Icon name="email" className="" />
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
            <Icon name="arrowRight" className="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
