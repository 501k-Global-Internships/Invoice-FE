"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../loadingSpinner";
import axios from "../api/axios";

const OverDue = () => {
  const [invoices, setInvoices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("")

  const [paidInvoicesCount, setPaidInvoicesCount] = useState("");
  const [unpaidInvoicesCount, setUnpaidInvoicesCount] = useState("");
  const [overdueInvoicesCount, setOverdueInvoicesCount] = useState("");
  const [draftInvoicesCount, setDraftInvoicesCount] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [nameAbbr, setNameAbbr] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("kbsEmail");
    const fullName = localStorage.getItem("name");
  
    if (fullName) {
      const nameParts = fullName.split(" ");
      let nameAbbr;
  
      if (nameParts.length === 1) {
        nameAbbr = fullName.charAt(0).toUpperCase();
      } else {
        const firstName = nameParts[0];
        const lastName = nameParts[1];
        nameAbbr = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
      }
  
      setNameAbbr(nameAbbr);
    }
  
    setEmail(email);
    setFullName(fullName);
  }, []);
  

  const getInvoices = async () => {
    try {
      const response = await axios.get("/invoices", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
      console.log(invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const getPaidInvoices = async () => {
    try {
      const response = await axios.get("/invoices?status=paid", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const getUnpaidInvoices = async () => {
    try {
      const response = await axios.get("/invoices?status=unpaid", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const getOverdueInvoices = async () => {
    try {
      const response = await axios.get("/invoices?status=overdue", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const getDraftInvoices = async () => {
    try {
      const response = await axios.get("/invoices?status=draft", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const getThirtyDaysInvoices = async () => {
    try {
      const response = await axios.get("/invoices?dateFilter=last30", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };
  const getSixtyDaysInvoices = async () => {
    try {
      const response = await axios.get("/invoices?dateFilter=last60", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };
  const getNinetyDaysInvoices = async () => {
    try {
      const response = await axios.get("/invoices?dateFilter=last90", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  const changeStatusToPaid = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        router.push("/");
        return;
      }

      const response = await axios.patch(
        `/update-invoice-status/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.id === id ? { ...invoice, status: "paid" } : invoice
        )
      );
    } catch (err) {
      console.error("Error:", err);
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
      }
      router.push("/");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`/delete-invoice/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });

      console.log(response.data);
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoice) => invoice.id !== id)
      );
      router.push("/invoiceDelete");
    } catch (err) {
      console.error(err);
      router.push("/");
    }
  };

  const downloadInvoice = async (id) => {
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

  const handleSelectChangeStatus = async (selectedValue) => {
    try {
      switch (selectedValue) {
        case "all":
          await getInvoices();
          break;
        case "paid":
          await getPaidInvoices();
          break;
        case "unpaid":
          await getUnpaidInvoices();
          break;
        case "overdue":
          await getOverdueInvoices();
          break;
        case "draft":
          await getDraftInvoices();
          break;
        default:
          break;
      }
    } catch (err) {
      console.error("Error fetching invoices:", err);
    }
  };

  const handleSelectChangeDays = async (selectedValue) => {
    try {
      switch (selectedValue) {
        case "last30":
          await getThirtyDaysInvoices();
          break;
        case "last60":
          await getSixtyDaysInvoices();
          break;
        case "last90":
          await getNinetyDaysInvoices();
          break;
        default:
          break;
      }
    } catch (err) {
      console.error("Error fetching invoices:", err);
    }
  };

  const handleInvoiceSearch = async (e) => {
    try {
      const value = e.target.value;
      const response = await axios.get(`/invoices?searchKey=${value}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setInvoices(response.data.invoices);
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("No Server Response!");
      } else if (err.response?.status === 403) {
        setErrMsg("Oops! You are not authorized to consume this resource.");
      } else {
        router.push("/");
      }
    }
  };

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const response = await axios.get("/invoices", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        setInvoices(response.data.invoices);
      } catch (err) {
        console.error(err);
        if (!err?.response) {
          setErrMsg("No Server Response!");
        } else if (err.response?.status === 403) {
          setErrMsg("Oops! You are not authorized to consume this resource.");
        } else {
          router.push("/");
        }
      }
    };

    const getPaidInvoices = async () => {
      try {
        const response = await axios.get("/invoices?status=paid", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        setPaidInvoicesCount(response.data.count);
      } catch (err) {
        console.error(err);
        if (!err?.response) {
          setErrMsg("No Server Response!");
        } else if (err.response?.status === 403) {
          setErrMsg("Oops! You are not authorized to consume this resource.");
        } else {
          router.push("/");
        }
      }
    };

    const getUnpaidInvoices = async () => {
      try {
        const response = await axios.get("/invoices?status=unpaid", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        setUnpaidInvoicesCount(response.data.count);
      } catch (err) {
        console.error(err);
        if (!err?.response) {
          setErrMsg("No Server Response!");
        } else if (err.response?.status === 403) {
          setErrMsg("Oops! You are not authorized to consume this resource.");
        } else {
          router.push("/");
        }
      }
    };

    const getOverdueInvoices = async () => {
      try {
        const response = await axios.get("/invoices?status=overdue", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        setOverdueInvoicesCount(response.data.count);
      } catch (err) {
        console.error(err);
        if (!err?.response) {
          setErrMsg("No Server Response!");
        } else if (err.response?.status === 403) {
          setErrMsg("Oops! You are not authorized to consume this resource.");
        } else {
          router.push("/");
        }
      }
    };

    const getDraftInvoices = async () => {
      try {
        const response = await axios.get("/invoices?status=draft", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        setDraftInvoicesCount(response.data.count);
      } catch (err) {
        console.error(err);
        if (!err?.response) {
          setErrMsg("No Server Response!");
        } else if (err.response?.status === 403) {
          setErrMsg("Oops! You are not authorized to consume this resource.");
        } else {
          router.push("/");
        }
      }
    };

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    getInvoices();
    getPaidInvoices();
    getUnpaidInvoices();
    getOverdueInvoices();
    getDraftInvoices();
    fetchData();
  }, []);

  const handleSelectAllClients = (checked) => {
    if (checked) {
      setSelectedClients(invoices.map((invoice) => invoice.id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleClientCheckbox = (checked, clientId) => {
    if (checked) {
      setSelectedClients([...selectedClients, clientId]);
      setSelectedInvoiceId(clientId)
    } else {
      setSelectedClients(selectedClients.filter((id) => id !== clientId));
    }
  };

  const handleCheckboxChange = (invoiceId, checked) => {
    if (checked) {
      setCheckedInvoices([...checkedInvoices, invoiceId]);
    } else {
      setCheckedInvoices(checkedInvoices.filter((id) => id !== invoiceId));
    }
  };

  const handleSelectAllCheckboxChange = (checked) => {
    setSelectAllInvoices(checked);
    if (checked) {
      setCheckedInvoices(invoices.map((invoice) => invoice.id));
    } else {
      setCheckedInvoices([]);
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
    <div className={`bg-[#FDB3B3] rounded-full p-2`}>
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
    { status: "Paid", amount: paidInvoicesCount, icon: <PaidIcon /> },
    { status: "Unpaid", amount: unpaidInvoicesCount, icon: <UnpaidIcon /> },
    {
      status: "Overdue",
      amount: overdueInvoicesCount,
      color: "red-500",
      icon: <OverdueIcon />,
    },
    { status: "Draft", amount: draftInvoicesCount, icon: <DraftIcon /> },
  ];

  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const paginationButtons = [];

  for (let i = startPage; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={currentPage === i ?
          'text-black px-3 py-2 rounded-md border-black border hover:bg-gray-100 transition-colors duration-200'
          : 'text-gray-500 px-3 py-2 hover:bg-gray-100 transition-colors duration-200'}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div className="flex h-screen">
      {/* paid invoice section */}
      <div className="bg-[#333333] text-white px-4 py-8">
        <div className="mt-[2rem] ml-[2rem]">
          <div className="ml-4">
            <img src="/KBS.png" alt="Avatar" className="w-[6rem] mr-2" />
          </div>
          <nav className="space-y-4">
            <Link href="/payroll">
              <button className="px-4 py-2 rounded hover:bg-gray-700 flex items-center mt-2">
                <div className="w-2 mr-2">
                  <img src="/payrol.png" alt="payrol" width={40} />
                </div>
                Payroll
              </button>
            </Link>
            <Link href="/transactions">
              <button className=" mt-[.6rem] flex items-center px-4 py-2 rounded hover:bg-gray-700">
                <div className="w-2 mr-2">
                  <img src="/tran.png" alt="transaction" width={40} />
                </div>
                Transaction
              </button>
            </Link>
            <Link href="/invoices">
              <button className="mt-[.6rem] px-4 py-2 lg:w-[9rem] text-start rounded bg-[#FFD700] text-black hover:bg-[#FFD7] flex items-center">
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
                  <img src="/set.png" alt="payroll" width={40} />
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
          </nav>
        </div>
        <div className="flex-1 relative">
          <div className="relative p-[1.2rem] bg-white text-xs rounded-3xl text-black mt-[5rem] md:mr-8 lg:mr-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src="/croo2.png"
                alt="croo"
                className="w-[3.5rem] mr-1 -mt-[1.8rem]"
              />
            </div>
            <div className="ml-4">
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
      {/* search invoice section */}
      {loading ?
        <LoadingSpinner loading={loading} />
        :
        <div className="flex-1 bg-white p-8 h-screen">
          <div className="flex flex-row md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-2">
                {nameAbbr}
              </div>
              <div>
                <p className="font-semibold text-xl">{fullName}</p>
                <p className="font-small text-xs">{email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search invoices"
                  onChange={handleInvoiceSearch}
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="%23666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left 8px center",
                    backgroundSize: "1.2rem",
                  }}
                />
              </div>
              {/* <div className="mr-3">
              <button>
                <img
                  src="/settingsIcon.png"
                  alt="settingsIcon"
                  className="w-5 mr-4"
                />
              </button>
            </div>
            <button className="">
              <img
                src="/bellIcon.png"
                alt="bellIcon"
                className=" bg-[#8DED85] rounded-full p-[.7rem]"
                width={40}
              />
            </button> */}
            </div>
            <div className="flex items-center">
              <Link
                href="/createInvoice"
                className="flex items-center bg-yellow-400 text-black px-2 py-2 rounded-md mr-2"
              >
                <div className="flex items-center">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 sm:mr-2"
                  >
                    <path
                      d="M4 1V4M4 4V7M4 4H7M4 4L1 4"
                      stroke="#333333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">New Invoice</span>
                </div>
              </Link>
            </div>
          </div>
          {/* Invoice Overview section */}
          <div className="pt-7 mt-[2rem] ">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="text-2xl font-semibold mb-4">Invoice overview</h1>
            <div className="flex flex-col bg-[#000000] p-4 rounded-md shadow-md mt-2">
              <div className="grid grid-cols-4 gap-4">
                {invoiceData.map((item) => (
                  <div
                    key={item.status}
                    className="bg-white text-black p-4 rounded-md flex items-center"
                  >
                    <div className="flex items-center mb-2 mt-1">
                      {/* Render SVG icon directly */}
                      <div
                        className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4`}
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
          <div className="flex justify-between items-center py-4 mt-6 rounded-md">
            <h2 className="text-lg">Clients list</h2>
            <div className="flex space-x-4 mr-4">
              <button
                onClick={() => downloadInvoice(selectedInvoiceId)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md border border-black text-xs font-semibold hover:bg-gray-100 transition-colors duration-200">
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
              <button
                onClick={() => downloadInvoice(selectedInvoiceId)}
                className="flex gap-2 items-center bg-white px-4 py-2 rounded-md border border-black text-xs font-semibold hover:bg-gray-100 transition-colors duration-200">
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
                  onChange={(event) =>
                    handleSelectChangeStatus(event.target.value)
                  }
                  className="appearance-none bg-white px-4 py-3 rounded-md border font-medium border-black text-black text-xs hover:bg-gray-100 transition-colors duration-200 pr-8"
                >
                  <option value="all">All Invoice</option>
                  <option value="overdue">Overdue Invoice</option>
                  <option value="unpaid">Unpaid Invoice</option>
                  <option value="paid">Paid Invoice</option>
                  <option value="draft">Draft</option>
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
                <select
                  onChange={(event) => handleSelectChangeDays(event.target.value)}
                  className="appearance-none bg-white text-gray-400 border border-gray-400 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 pr-8"
                >
                  <option value="last30">Last 30 days</option>
                  <option value="last60">Last 60 days</option>
                  <option value="last90">Last 90 days</option>
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
            <div className="rounded-lg max-w-full overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-black rounded-t-lg ">
                  <tr className="text-sm text-white">
                    <th className="py-2 px-4 flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-6 w-4 text-blue-600 rounded mr-4"
                        onChange={(e) => handleSelectAllClients(e.target.checked)}
                      />
                      Client
                    </th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Issue Date</th>
                    <th className="py-2 px-4">Due Date</th>
                    <th className="py-2 px-4">Amount</th>
                    <th className="py-2 px-4">Action</th>
                  </tr>
                </thead>
                {invoices && (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((invoice, index) => (
                      <tr key={index} className="border-b last:border-none">
                        <td className="py-2 px-4 ml-9">
                          <div className="flex items-center">
                            <div className="mr-2 flex">
                              <input
                                type="checkbox"
                                className="form-checkbox h-6 w-4 text-blue-600 rounded mr-"
                                checked={selectedClients.includes(invoice.id)}
                                onChange={(e) =>
                                  handleClientCheckbox(
                                    e.target.checked,
                                    invoice.id
                                  )
                                }
                              />
                            </div>
                            <div>
                              <div>{invoice.customerName}</div>
                              <div className="text-sm text-gray-500">
                                Invoice ID: #DC40{invoice.id}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 px-4  sm:pl-[3.2rem]">{invoice.status}</td>
                        <td className="py-2 px-4 whitespace-nowrap sm:pl-[3.4rem]">
                          {new Date(invoice.issueDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap sm:pl-[3.2rem]">
                          {new Date(invoice.dueDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="py-2 px-4 sm:pl-[3.2rem]">
                          &#8358;
                          {invoice.total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td>
                        <td className="py-2 px-4 sm:pl-[3rem] ">
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
                            <div
                              onClick={() => toggleDropdown(index)}
                              className="relative right-[59px] bottom-[5px] mt-2 py-4 px-1 bg-white shadow-md rounded-md"
                            >
                              <button
                                onClick={() => changeStatusToPaid(invoice.id)}
                                className="flex w-full gap-1 items-center text-[#8DED85] px-2 text-sm hover:bg-gray-100"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  className=" rounded-full bg-[#8DED85]"
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
                                Paid
                              </button>
                              <Link
                                href={`/invoicePreview/${invoice.id}`}
                                className="flex w-full gap-1 items-center text-[#8DED85] px-2 text-sm hover:bg-gray-100"
                              >
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
                                Preview
                              </Link>

                              {/* <button className="flex items-center w-full gap-2 text-[#F5D563] px-2 text-sm hover:bg-gray-100">
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
                            </button> */}
                              <button
                                onClick={() => handleDeleteClick(invoice.id)}
                                className="flex items-center gap-2 w-full px-2 text-sm text-[#FB4545] hover:bg-gray-100"
                              >
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
                              <button
                                onClick={() => downloadInvoice(invoice.id)}
                                className="flex items-center gap-2 w-full text-sm text-[#FFD700] px-2 hover:bg-gray-100"
                              >
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
                )}
              </table>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-[2rem] mb-7">
            <button
              className="bg-white text-gray-700 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}>
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
            {paginationButtons}
            <button
              className=" text-black px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}>
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
          <p>{`Showing invoices ${indexOfFirstItem + 1} to ${Math.min(
            indexOfLastItem,
            invoices.length
          )} of ${invoices.length}`}</p>
        </div>
      }
    </div>
  );
};

export default OverDue;
