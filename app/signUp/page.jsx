"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "../api/axios";
import { auth, provider, signInWithPopup } from '../../config/firebaseConfig';

const SignUpForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  const router = useRouter();

  const REGISTER_URL = "/sign-up";
  const errRef = useRef();

  const [criteria, setCriteria] = useState({
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });


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

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setErrMsg([]);
  }, [email, name, password, passwordConfirmation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, password, passwordConfirmation };
    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      localStorage.setItem("token", response?.data?.token);
      router.push("/");
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
  };


  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result?.user.displayName
      const email = result?.user.email
      const response = await axios.post('auth-sign-in',
        JSON.stringify({ name, email }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("name", response?.data?.name);
      localStorage.setItem("kbsEmail", response?.data?.email);

      router.push("/allInvoices");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-4">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="text-xl font-medium mb-7 text-center">
        Create an account to enjoy our solutions
      </h2>
      <div ref={errRef} className="mb-4">
        {Array.isArray(errMsg) ? (
          errMsg.map((error, index) => (
            <p key={index}
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >{error.msg}</p>
          ))
        ) : (
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >{errMsg.msg}</p>
        )}
      </div>
      <div className="w-full max-w-md bg-[#565656] rounded-t-2xl shadow-md px-11 py-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              onChange={handleChange}
              value={password}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Enter your password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                className="text-gray-500"
                onClick={handleTogglePasswordVisibility}
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
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFD700] font-medium rounded-md hover:bg-[#e4c93e] transition-colors duration-300 mb-4 cursor-pointer"
          >
            Create Account
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

          <p className="text-gray-300 text-center">
            Already have an account?
            <Link href="/" className=" hover:text-gray-400">
              <span> Login</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="flex bg-[#333333] w-full max-w-md items-center justify-center rounded-b-2xl shadow-md px-6 py-7">
        <button
          type="button"
          className="flex items-center justify-center gap-3 text-[#FFE86B]"
          onClick={signInWithGoogle}>
          Sign up with Google
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.3333 1.3335L13 4.00016M13 4.00016L10.3333 6.66683M13 4.00016L1 4.00016"
              stroke="#FFE86B"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
