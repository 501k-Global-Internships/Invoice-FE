"use client";
import React, { useRef, useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import Link from "next/link";
import axios from "@/app/api/axios";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/loadingSpinner";

const InvoicePreview = () => {
  // Define the state for storing the dropped image file
  const [imageFile, setImageFile] = useState(null);
  // Define the onDrop function to handle file drops
  const onDrop = (acceptedFiles) => {
    // Update the imageFile state with the dropped file
    setImageFile(acceptedFiles[0]);
  };
  const [invoice, setInvoice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");

  const [billingAddress, setBillingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [invoiceTitle, setInvoiceTitle] = useState("");
  const [paymentCurrency, setPaymentCurrency] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);

  const [tax, setTax] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const total = subTotal - discount + Number(tax);

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
  const nameRef = useRef();
  const router = useRouter();

  const [items, setItems] = useState([
    { itemDescription: "", quantity: "", price: "", amount: "" },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { itemDescription: "", quantity: "", price: "", amount: "" },
    ]);
  };

  const handleItemsInputChange = (index, event) => {
    const { id, value } = event.target;
    const newItems = [...items];
    newItems[index][id] = value;

    // Calculate the amount if quantity or price changes
    if (id === "quantity" || id === "price") {
      const quantity = newItems[index].quantity
        ? parseFloat(newItems[index].quantity)
        : 0;
      const price = newItems[index].price
        ? parseFloat(newItems[index].price)
        : 0;
      newItems[index].amount = quantity * price;
    }

    setItems(newItems);
  };

  const handleDiscountChange = (e) => {
    const value = e.target.value;
    const calculatedDiscount = (
      parseFloat(value) *
      (subTotal / 100)
    ).toString();
    setDiscount(calculatedDiscount);
  };

  const handleTaxChange = (e) => {
    const value = e.target.value;
    const calculatedTax = (parseFloat(value) * (subTotal / 100)).toString();
    setTax(calculatedTax);
  };

  const handleEditButtonClick = () => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  };

  useEffect(() => {
    const total = items.reduce((sum, item) => sum + Number(item.amount), 0);
    setSubTotal(total);
  }, [items]);

  const handleEditInvoice = async (e) => {
    e.preventDefault();
    const payload = {
      items,
      name,
      email,
      customerName,
      billingAddress,
      phoneNumber,
      customerEmail,
      invoiceTitle,
      paymentCurrency,
      additionalInfo,
      accountName,
      accountNumber,
      bankName,
      issueDate,
      dueDate,
      discount,
      tax,
    };
    const id = window.location.href.split("/")[4];
    try {
      const response = await axios.put(`edit-invoice/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      router.push("/allInvoices");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 400) {
        setErrMsg("Oops! Bad request. Check the fields and try again.");
      } else if (err.response?.status === 401) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        setErrMsg("Failed!");
      }
      errRef.current.focus();
    }
  };

  const downloadInvoice = async () => {
    const id = window.location.href.split("/")[4];
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`/download-invoice/${id}`, {
        responseType: "blob", // Important to handle binary data
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Set the download attribute with a dynamic file name
      link.setAttribute("download", `invoice_${id}.pdf`); // Set the file name

      // Append the link to the document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading invoice:", error);
    }
  };

  useEffect(() => {
    const getInvoice = async () => {
      const id = window.location.href.split("/")[4];

      try {
        const response = await axios.get(`/invoice/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });

        console.log(response.data);
        const issueDate = new Date(response.data.issueDate);
        const dueDate = new Date(response.data.dueDate);
        const formattedIssueDate = issueDate.toISOString().split("T")[0];
        const formattedDueDate = dueDate.toISOString().split("T")[0];
        setInvoice(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setCustomerName(response.data.customerName);
        setCustomerName(response.data.customerName);
        setBillingAddress(response.data.billingAddress);
        setPhoneNumber(response.data.phoneNumber);
        setCustomerEmail(response.data.customerEmail);
        setInvoiceTitle(response.data.invoiceTitle);
        setPaymentCurrency(response.data.paymentCurrency);
        setItems(response.data.items);
        setAdditionalInfo(response.data.additionalInfo);
        setAccountName(response.data.accountName);
        setAccountNumber(response.data.accountNumber);
        setBankName(response.data.bankName);
        setIssueDate(formattedIssueDate);
        setDueDate(formattedDueDate);
        setDiscount(response.data.discount);
        setTax(response.data.tax);
      } catch (err) {
        console.error(err);
        navigate("/sign-in", { state: { from: location }, replace: true });
      }
    };

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    getInvoice();
    fetchData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <div className="sm:h-full p-4 sm:p-8">
          <div className="flex flex-col mt-[7rem]">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="mb-4">
              <Link
                href="/allInvoices"
                className="flex gap-2 items-center text-2xl"
              >
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
                Invoice Preview
              </Link>
            </div>
            {invoice && (
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-7">
                  <div className="mt-[6rem]">
                    <h3 className="text-xl">Invoice From</h3>
                    <p className="text-gray-500">
                      Enter your details as the sender
                    </p>
                  </div>
                  {/* Dropzone component */}
                  <div className="flex bg-gray-200 border-gray-400 border text-center rounded-md w-full md:w-1/3 mt-8 md:mt-0">
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
                <div className="flex flex-col md:flex-row justify-between items-center mb-[3rem] mt-[1rem]">
                  <div>
                    <h2 className="text-xl">Invoice From</h2>
                    <h4 className="text-sm">
                      Enter your details as the sender
                    </h4>
                  </div>
                  <div className="flex space-x-4">
                    <div className="">
                      <button
                        onClick={handleEditButtonClick}
                        className="flex gap-2 px-4 border border-gray-300 py-3 bg-white text-gray-800 rounded-md hover:bg-gray-300"
                      >
                        Edit invoice
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            className="w-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.8374 4.65572L19.9354 8.75373M17.576 2.91708C18.7077 1.78545 20.5424 1.78545 21.674 2.91708C22.8057 4.04872 22.8057 5.88346 21.674 7.01509L5.716 22.9731H1.65918V18.8339L17.576 2.91708Z"
                              stroke="#111827"
                              stroke-width="2.31818"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <button
                      onClick={downloadInvoice}
                      href="#"
                      className="flex gap-2 px-4 py-3 bg-[#FFD700] text-white rounded-md hover:bg-gray-700"
                    >
                      Download invoice
                      <div>
                        <svg
                          width="22"
                          height="21"
                          viewBox="0 0 22 21"
                          className="w-5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.40869 15.1361L1.40869 16.2952C1.40869 18.2156 2.96552 19.7725 4.88596 19.7725L16.4769 19.7725C18.3973 19.7725 19.9541 18.2156 19.9541 16.2952L19.9541 15.1361M15.3178 10.4997L10.6814 15.1361M10.6814 15.1361L6.04505 10.4997M10.6814 15.1361L10.6814 1.22701"
                            stroke="black"
                            stroke-width="2.31818"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                {/* form section */}
                <div className="shadow-xl border-t rounded-lg">
                  <form className="flex flex-col px-4 py-6 sm:px-8">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 mt-4 ml-0 sm:ml-5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g Adamo Nosiru Olamilekan"
                      value={name}
                      ref={nameRef}
                      onChange={(e) => setName(e.target.value)}
                      className="shadow-md rounded p-2 mb-4 ml-0 w-full sm:w-[38rem] focus:outline-none"
                    />
                    <label htmlFor="email" className="mb-2 ml-0 sm:ml-5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g leronaldo@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded p-2 mb-4 ml-0 w-full sm:w-[50rem] focus:outline-none"
                    />
                  </form>
                </div>
                {/* Customer's Information */}
                <div className="mt-[3rem]">
                  <div className="mb-[1.2rem]">
                    <h1 className="text-xl">Your Customer's Information</h1>
                    <h2>Enter the recipient's details</h2>
                  </div>
                  <form className="flex flex-col p-4 space-y-4 border-t shadow-xl rounded-lg">
                    <label htmlFor="email" className="ml-0 sm:ml-5">
                      Customer's Name
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="enter customer name..."
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="rounded p-2 w-full sm:w-[38rem] ml-0 sm:ml-5 border-2 focus:outline-none"
                    />
                    <label
                      htmlFor="billingAddress"
                      className="ml-0 sm:ml-5 mt-3"
                    >
                      Billing Address
                    </label>
                    <textarea
                      id="billingAddress"
                      name="billingAddress"
                      placeholder="e.g Suite 10, Admiralty Way, Victoria Island, Lagos State, Nigeria"
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      className="border-2 rounded p-2 h-24 w-full sm:w-[64rem] ml-0 sm:ml-5 focus:outline-none"
                    />
                    <label htmlFor="phoneNumber" className="block ml-0 sm:ml-5">
                      Telephone Number
                    </label>
                    <div className="flex items-center border-2 rounded p-2 w-full sm:w-[50rem] ml-0 sm:ml-5">
                      <span className="px-2 text-gray-500">
                        {/* SVG icon */}
                      </span>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="e.g 090xxxxxxx"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="focus:outline-none"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="w-full sm:w-[34rem] ml-0 sm:ml-5"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center border-2 rounded p-2 w-full sm:w-[50rem] ml-0 sm:ml-5 mb-9">
                      <span className="px-2 text-gray-500">
                        {/* SVG icon */}
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g leronaldio@gmail.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="focus:outline-none"
                      />
                    </div>
                  </form>
                </div>
                <div className="mt-[4rem] mb-[3rem]">
                  <h1 className="text-xl">Invoice Details</h1>
                  <h2 className="text-gray-600">
                    Enter the details of your invoice
                  </h2>
                </div>
                {/* Invoice Form section */}
                <div className="shadow-xl border-t rounded-l p-9 mb-8">
                  <div className="mb-[3.2rem]">
                    <label
                      htmlFor="invoiceTitle"
                      className="block text-black mb-2"
                    >
                      Invoice title
                    </label>
                    <input
                      type="text"
                      id="invoiceTitle"
                      value={invoiceTitle}
                      onChange={(e) => setInvoiceTitle(e.target.value)}
                      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-[34rem]"
                      placeholder="e.g Payment for 2 units of Dell E7240 laptops"
                    />
                  </div>
                  <div className="mb-[3.2rem]">
                    <label
                      htmlFor="paymentCurrency"
                      className="block text-black mb-2"
                    >
                      Payment currency
                    </label>
                    <select
                      value={paymentCurrency}
                      onChange={(e) => setPaymentCurrency(e.target.value)}
                      id="paymentCurrency"
                      className="shadow appearance-none border rounded w-full sm:w-[34rem] py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select...</option>
                      <option value="NGN" className="text-gray-600">
                        NGN
                      </option>
                      <option value="USD" className="text-gray-600">
                        USD
                      </option>
                      <option value="EUR" className="text-gray-600">
                        EUR
                      </option>
                      <option value="GBP" className="text-gray-600">
                        GBP
                      </option>
                    </select>
                  </div>
                  {items.map((item, index) => (
                    <div className="flex flex-wrap -mx-4" key={index}>
                      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <label
                          htmlFor="itemDescription"
                          className="block text-black mb-2"
                        >
                          Item Description
                        </label>
                        <input
                          type="text"
                          id="itemDescription"
                          value={item.itemDescription}
                          onChange={(e) => handleItemsInputChange(index, e)}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="e.g US Dollar"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <label htmlFor="qty" className="block text-black mb-2">
                          Qty
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          value={item.quantity}
                          onChange={(e) => handleItemsInputChange(index, e)}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="e.g 5"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <label
                          htmlFor="price"
                          className="block text-black mb-2"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          value={item.price}
                          onChange={(e) => handleItemsInputChange(index, e)}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="e.g 50"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                        <label
                          htmlFor="amount"
                          className="block text-black mb-2"
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          id="amount"
                          value={item.amount}
                          readOnly
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                          placeholder="Amount"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mb-4">
                    <button
                      type="button"
                      className="hover:bg-gray-200 text-black py-2 px-4 rounded"
                      onClick={handleAddItem}
                    >
                      + Add item
                    </button>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="additionalInfo"
                      className="block text-black mb-2"
                    >
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="additionalInfo"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="e.g Suite 10, Admiralty Way, Victoria Island, Lagos State, Nigeria"
                    ></textarea>
                  </div>
                  <hr className="mt-[2.4rem] mb-[2.2rem]" />
                  <div className="mb-4">
                    <h3 className="text-black text-2xl mb-2">
                      Receiving Account Details
                    </h3>
                    <div className="flex flex-wrap -mx-4">
                      <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="flex items-center">
                          <label
                            htmlFor="accountName"
                            className="block text-black mb-2 mr-2 whitespace-nowrap"
                          >
                            Account name
                          </label>
                          <input
                            type="text"
                            id="accountName"
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="e.g KBM Enterprise"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="flex items-center">
                          <label
                            htmlFor="accountNumber"
                            className="block text-black mb-2 mr-2 whitespace-nowrap"
                          >
                            Account number
                          </label>
                          <input
                            type="text"
                            id="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="e.g KBM Enterprise"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="flex items-center">
                          <label
                            htmlFor="bankName"
                            className="block text-black mb-2 mr-2 whitespace-nowrap"
                          >
                            Bank name
                          </label>
                          <input
                            type="text"
                            id="bankName"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="e.g KBM Enterprise"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-[2.4rem] mb-[2.2rem]" />
                  <div className="flex gap-[4rem] flex-wrap">
                    <div className="mb-4">
                      <label
                        htmlFor="issuedDate"
                        className="block text-black mb-2"
                      >
                        Issued date
                      </label>
                      <input
                        type="date"
                        id="issueDate"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        className="appearance-none border-gray-300 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue="2024-03-12"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="dueDate"
                        className="block text-black mb-2"
                      >
                        Due date
                      </label>
                      <input
                        type="date"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="border-gray-300 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue="2024-03-12"
                      />
                    </div>
                  </div>
                </div>
                {/* Invoice Summary section */}
                <div className="bg-white shadow-xl border-solid rounded-l p-4 md:p-6">
                  <div className="flex justify-between mr-4 md:mr-[.9rem]">
                    <h2 className="text-xl text-black mb-4">Invoice summary</h2>
                    <div className="">
                      <div className="flex items-center">
                        <span className="mr-1">Sub-total:</span>
                        <span>
                          {subTotal
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                        <span className="ml-1">{paymentCurrency}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex flex-col md:flex-row justify-end mb-2 mr-4 md:mr-[.9rem]">
                    <label
                      htmlFor="discount"
                      className="flex items-center mb-2 md:mb-0 md:mr-[1.5rem]"
                    >
                      Discount
                    </label>
                    <input
                      type="text"
                      id="discount"
                      onChange={handleDiscountChange}
                      placeholder="%"
                      className="w-full md:w-[8.6rem] mr-[2rem] border border-gray-300 text-end rounded-md px-2 py-1 focus:outline-none"
                    />
                    <input
                      type="text"
                      id="discount"
                      placeholder="discount"
                      readOnly
                      value={discount}
                      className="bg-gray-200 border shadow-2xl rounded-md px-2 py-1 w-full md:w-[8.6rem] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-end mb-4 mr-4 md:mr-[.9rem]">
                    <label
                      htmlFor="tax"
                      className="flex items-center mb-2 md:mb-0 md:mr-[3.9rem]"
                    >
                      Tax
                    </label>
                    <input
                      type="text"
                      id="tax"
                      placeholder="%"
                      onChange={handleTaxChange}
                      className="w-[8.6rem] mr-[2rem] border border-gray-300 text-end rounded-md px-2 py-1 focus:outline-none"
                    />
                    <input
                      type="text"
                      id="tax"
                      placeholder="tax"
                      readOnly
                      value={tax}
                      className="bg-gray-200 w-full md:w-[8.6rem] border rounded-md px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <hr className="mt-[1.3rem] mb-[1.3rem]" />
                  <div className="flex justify-end text-black mr-[.9rem]">
                    <div className="flex items-center">
                      <span className="mr-1">Total:</span>
                      <span>
                        {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span className="ml-1">{paymentCurrency}</span>
                    </div>
                  </div>
                </div>
                <div className="flex mt-[3rem] mb-[2rem] justify-end">
                  <button
                    onClick={handleEditInvoice}
                    className="flex gap-2 bg-[#FFD700] hover:bg-gray-300 text-black py-2 px-4 rounded-sm"
                  >
                    Save
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
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicePreview;
