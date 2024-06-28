"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";

const ResetPassword = () => {
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errMsg, setErrMsg] = useState([]);
  const errRef = useRef();
  const router = useRouter();

  const [criteria, setCriteria] = useState({
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });

  const handleToggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
    validatePassword(newPassword);
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const validatePassword = (password) => {
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const digit = /[0-9]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setCriteria({
      uppercase,
      lowercase,
      digit,
      specialChar,
    });
  };

  useEffect(() => {
    setErrMsg([{ msg: "" }]);
  }, [newPassword, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const recoveryPasswordId = urlParams.get('recoveryPasswordId');
    const payload = { recoveryPasswordId, newPassword, confirmPassword };

    try {
      await axios.put(`/reset-password?recoveryPasswordId=${recoveryPasswordId}`,
        JSON.stringify(payload),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          withCredentials: true
        }
      );
      let keysToRemove = ["token", "kbsEmail", "logoutName"];

      keysToRemove.forEach((k) => {
        localStorage.removeItem(k)
      });
      router.push("/resetSuccessful");

    } catch (err) {
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
          <div className="mb-4 relative">
            <input
              type={newPasswordVisible ? "text" : "password"}
              id="new-password"
              onChange={handleChange}
              value={newPassword}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Enter your new password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={newPasswordVisible ? faEye : faEyeSlash}
                className="text-gray-500"
                onClick={handleToggleNewPasswordVisibility}
              />
            </div>
          </div>
          <p className="text-gray-300 text-[.76rem] mt-4 mb-2">
            Hint: Password should contain at least 8 characters with:
          </p>
          <div className="flex flex-wrap mb-4 text-[#FFFFFF] text-[.6rem] gap-2">
            <div className={`flex items-center gap-[.3rem] ${criteria.uppercase ? 'bg-green-500' : 'bg-[#949494]'} rounded-md px-2 py-1`}>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z" fill="white" />
              </svg>
              Uppercase
            </div>
            <div className={`flex items-center gap-[.3rem] ${criteria.lowercase ? 'bg-green-500' : 'bg-[#949494]'} rounded-md px-2 py-1`}>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z" fill="white" />
              </svg>
              Lowercase
            </div>
            <div className={`flex items-center gap-[.3rem] ${criteria.digit ? 'bg-green-500' : 'bg-[#949494]'} rounded-md px-2 py-1`}>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z" fill="white" />
              </svg>
              Digits
            </div>
            <div className={`flex items-center gap-[.3rem] ${criteria.specialChar ? 'bg-green-500' : 'bg-[#949494]'} rounded-md px-2 py-1`}>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z" fill="white" />
              </svg>
              Special character
            </div>
          </div>
          <div className="mb-6 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              onPaste={handlePaste}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Confirm password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEye : faEyeSlash}
                className="text-gray-500"
                onClick={handleToggleConfirmPasswordVisibility}
              />
            </div>
          </div>
          <button 
            type="submit"
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

export default ResetPassword;