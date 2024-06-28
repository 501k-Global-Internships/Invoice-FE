"use client"
import React, { useState, useRef } from 'react';
import { useRouter } from "next/navigation";
import axios from '../api/axios';

const ResetPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();
  const errRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios.patch("reset-password-email", {
        recipientEmail: email,
      }).then(() => {
        localStorage.setItem('email', email)
        router.push("/resetEmailSuccessful");
      }).catch((err) => {
        if (err.response && err.response.data) {
          if (Array.isArray(err.response.data.errors)) {
            setErrMsg(err.response.data.errors);
          } else {
            setErrMsg([{ msg: err.response.data.message }]);
          }
        } else {
          setErrMsg([{ msg: "No Server Response!" }]);
        }
        errRef.current.focus();
      });
    } else {
      setErrMsg("Please enter your email");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="font-medium text-xl text-center mb-4">
        Reset your password
      </h2>
      <div ref={errRef} className="mb-4">
        {Array.isArray(errMsg) ? (
          errMsg.map((error, index) => (
            <p key={index}
              ref={errRef}
              className={errMsg.length ? "text-center font-bold text-red-600 p-2 mb-2" : "absolute left-[-9999px]"}
              aria-live="assertive"
            >{error.msg}</p>
          ))
        ) : (
          <p
            ref={errRef}
            className={errMsg.length ? "text-center font-bold text-red-600 p-2 mb-2" : "absolute left-[-9999px]"}
            aria-live="assertive"
          >{errMsg.msg}</p>
        )}
      </div>
      <div className="w-full max-w-md bg-[#565656] rounded-lg shadow-md px-11 py-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>
          <button
            type='submit'
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFD700] font-medium rounded-md hover:bg-[#e4c93e] transition-colors duration-300 mb-4"
          >
            Reset password
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 1.3335L13 4.00016M13 4.00016L10.3333 6.66683M13 4.00016L1 4.00016"
                stroke="#333333"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordEmail;