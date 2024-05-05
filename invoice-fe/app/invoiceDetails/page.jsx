"use client";
import { useState } from "react";

const InvoiceDetails = () => {
  const [recipientEmail, setRecipientEmail] = useState("email@email.com");
  const [projectDetails, setProjectDetails] = useState("Project Details");
  const [issuedDate, setIssuedDate] = useState("12/3/2024");
  const [dueDate, setDueDate] = useState("12/3/2024");
  const [invoiceFrom, setInvoiceFrom] = useState("invoice from");
  const [invoiceTo, setInvoiceTo] = useState("invoice to");
  const [items, setItems] = useState([
    {
      itemName: "Business Flyer Design",
      qty: "02",
      cost: "N20,000.00",
      amount: "N40,000",
    },
  ]);

  const invoiceHistory = [
    { name: "Adam Olah", email: "adam@kbs.com" },
    { name: "Adam Olah", email: "adam@kbs.com" },
    { name: "Adam Olah", email: "adam@kbs.com" },
    { name: "Adam Olah", email: "adam@kbs.com" },
    { name: "Adam Olah", email: "adam@kbs.com" },
  ];
  const item = [{ name: "Flyer Design", qty: "02", price: "N40,000.00" }];

  const business = "Flyer Design";
  const total = "N40,000.00";
  const [invoices, setInvoices] = useState([
    {
      invoiceNumber: "INV-001",
      totalAmount: 40000,
      status: "Unpaid",
    },
  ]);

  const handleSaveDraft = () => {
    console.log("Invoice saved as draft");
  };

  const handleSaveAndContinue = () => {
    console.log("Invoice saved and ready to be sent");
  };

  const handleAddItem = () => {
    setItems([...items, { itemName: "", qty: "2", cost: "0", amount: "0" }]);
  };

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleItemChange = (event, index, property) => {
    const newItems = [...items];
    newItems[index][property] = event.target.value;
    setItems(newItems);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + parseInt(item.amount), 0);
  };

  const handleInvoiceFromChange = (event) => {
    setInvoiceFrom(event.target.value);
  };

  const handleInvoiceToChange = (event) => {
    setInvoiceTo(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:ml-[6.5rem]">
      <div className="flex">
        <h1 className="text-xl"><span className="text-gray-300">Invoice </span>/ Create new invoice</h1>
        <div className="flex space-x-8 md:justify-between lg:ml-[33rem]">
          <button
            className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={handleSaveDraft}
          >
            Save as draft
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-gray-200"
            onClick={handleSaveAndContinue}
          >
            Save & Continue
          </button>
        </div>
      </div>
      <div className="mt-[3rem]">
        <h2 className="text-lg font-bold">Invoice details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Invoice Details Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="recipientEmail" className="mb-1">
              Recipient email
            </label>
            <input
              id="recipientEmail"
              type="text"
              value={recipientEmail}
              onChange={(e) => handleChange(e, setRecipientEmail)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="projectDetails" className="mb-1">
              Project Details
            </label>
            <input
              id="projectDetails"
              value={projectDetails}
              onChange={(e) => handleChange(e, setProjectDetails)}
              className="px-3 py-2 pb-[3rem] border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="issuedDate" className="mb-1">
                Issued Date
              </label>
              <input
                id="issuedDate"
                type="text"
                value={issuedDate}
                onChange={(e) => handleChange(e, setIssuedDate)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="dueDate" className="mb-1">
                Due Date
              </label>
              <input
                id="dueDate"
                type="text"
                value={dueDate}
                onChange={(e) => handleChange(e, setDueDate)}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="issuedDate" className="mb-1">
                Invoice from
              </label>
              <input
                id="invoice from"
                type="text"
                value={invoiceFrom}
                onChange={handleInvoiceFromChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="dueDate" className="mb-1">
                Invoice to
              </label>
              <input
                id="invoice to"
                type="text"
                value={invoiceTo}
                onChange={handleInvoiceToChange}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300"
              />
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xlfont-bold mb-4">Items Details</h1>
            <table className="table-auto w-full border border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-2 font-normal">Item</th>
                  <th className="px-4 py-2 font-normal">Qty</th>
                  <th className="px-4 py-2 font-normal">Cost</th>
                  <th className="px-4 py-2 font-normal">Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Display items dynamically */}
                {items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{item.itemName}</td>
                    <td className="px-4 py-2">{item.qty}</td>
                    <td className="px-4 py-2">{item.cost}</td>
                    <td className="px-4 py-2">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Connect "Add Item" button to handleAddItem function */}
            <button
              className=" hover:bg-gray-300 text-black py-2 text-xl px-4 rounded mt-4"
              onClick={handleAddItem}
            >
              + Add Item
            </button>
          </div>
        </div>
        {/* Invoice Summary Section */}
        <div className="lg:ml-[2rem]">
          <div className="bg-white rounded-md shadow-md p-[2rem] lg:w-1/2">
            <h2 className=" mb-4 font-semibold">Invoice summary</h2>
            <div className="flex justify-between mb-2">
              <ul>
                <li className="mb-1">Business</li>
                <p className="">{business}</p>
              </ul>
              <div className="flex justify-between mb-2">
                {item.map((item, index) => (
                  <p key={index} className="flex justify-between text-sm">
                    <span>{item.qty}</span>
                    <span className="">{item.price}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 mb-[4rem]">
              <p className="">Total</p>
              <p className="">{total}</p>
            </div>
            <button className="bg-yellow-400 text-black py-3 rounded-md w-full">
              Preview &amp; Send Invoice
            </button>
          </div>
          {/* Invoice History Section */}
          <div className="grid md:grid-cols-2 gap-4 mt-[3.4rem]">
            <div className="bg-white rounded-md shadow-md md:col-span-1 p-6">
              <div className="flex justify-between">
                <h2 className="text-lg mb-2">Invoice History</h2>
                <select className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-300">
                  <option value="">Select Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              {invoiceHistory.map((invoice, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img
                    src="/ava.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2 bg-black"
                  />
                  <div>
                    <p>{invoice.name}</p>
                    <p>{invoice.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
