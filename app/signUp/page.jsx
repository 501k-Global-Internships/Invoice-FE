"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import axios from "../api/axios";
import { auth, provider, signInWithPopup } from '../../config/firebaseConfig';

const SignUpForm = () => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const REGISTER_URL = '/sign-up';

  const errRef = useRef();

  const [email, setEmail] = useState();

  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === passwordConfirmation);
  }, [password, passwordConfirmation, PWD_REGEX])

  useEffect(() => {
    setErrMsg('');
  }, [email, name, password, passwordConfirmation])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password, passwordConfirmation }

    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify(payload),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      localStorage.setItem('token', response?.data?.token);

      router.push("/")
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response!');
      } else if (err.response?.status === 409) {
        setErrMsg('Email already exist!');
      } else if (err.response?.status === 400) {
        setErrMsg('Bad request!');
      } else {
        setErrMsg('Registration Failed!')
      }
      errRef.current.focus();
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const name = result.user.displayName
      const email = result.user.email
      
      const response = await axios.post("/auth_sign_in",
        JSON.stringify({ name, email }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      localStorage.setItem('token', response?.data?.token);
      localStorage.setItem('name', response?.data?.name);
      localStorage.setItem('kbsEmail', response?.data?.email);

      router.push('/allInvoices');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="text-xl font-medium mb-7 text-center">
        Create an account to enjoy our solutions
      </h2>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="w-full max-w-md bg-[#565656] rounded-t-2xl shadow-md px-11 py-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
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
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
              >
                <path
                  d="M13.9998 8C13.9998 9.65685 12.6566 11 10.9998 11C9.3429 11 7.99976 9.65685 7.99976 8C7.99976 6.34315 9.3429 5 10.9998 5C12.6566 5 13.9998 6.34315 13.9998 8Z"
                  stroke="#575757"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.45801 7.99997C2.73228 3.94288 6.52257 1 11.0002 1C15.4778 1 19.2681 3.94291 20.5424 8.00004C19.2681 12.0571 15.4778 15 11.0002 15C6.52256 15 2.73226 12.0571 1.45801 7.99997Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-300 text-[.76rem] mt-4 mb-2">
            Hint: Password should contain:
          </p>
          <div className=" flex mb-4 text-[#FFFFFF] text-[.6rem] items-center space-x-2">
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z"
                  fill="white"
                />
              </svg>
              Uppercase
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z"
                  fill="white"
                />
              </svg>
              Lowercase
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z"
                  fill="white"
                />
              </svg>
              Digits
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57374 1.11657C7.68423 0.983983 7.66631 0.786931 7.53373 0.676443C7.40114 0.565954 7.20409 0.583868 7.0936 0.716454L4.84748 3.41179C4.3963 3.95321 4.07891 4.3329 3.80362 4.58149C3.53475 4.82428 3.34919 4.90145 3.167 4.90145C2.98481 4.90145 2.79925 4.82428 2.53038 4.58149C2.25509 4.3329 1.9377 3.95321 1.48652 3.41179L0.907069 2.71645C0.79658 2.58387 0.599529 2.56595 0.466942 2.67644C0.334356 2.78693 0.316442 2.98398 0.426931 3.11657L1.02246 3.8312C1.45382 4.34885 1.79927 4.76341 2.11151 5.04536C2.43403 5.3366 2.76372 5.52645 3.167 5.52645C3.57028 5.52645 3.89997 5.3366 4.22249 5.04536C4.53472 4.76341 4.88017 4.34886 5.31153 3.83122L7.57374 1.11657Z"
                  fill="white"
                />
              </svg>
              Special character
            </div>
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Confirm password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
              >
                <path
                  d="M13.9998 8C13.9998 9.65685 12.6566 11 10.9998 11C9.3429 11 7.99976 9.65685 7.99976 8C7.99976 6.34315 9.3429 5 10.9998 5C12.6566 5 13.9998 6.34315 13.9998 8Z"
                  stroke="#575757"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.45801 7.99997C2.73228 3.94288 6.52257 1 11.0002 1C15.4778 1 19.2681 3.94291 20.5424 8.00004C19.2681 12.0571 15.4778 15 11.0002 15C6.52256 15 2.73226 12.0571 1.45801 7.99997Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFD700] font-medium rounded-md hover:bg-[#e4c93e] transition-colors duration-300 mb-4 cursor-pointer"
            disabled={!validPassword || !validMatch ? true : false}
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
          onClick={signInWithGoogle}
        >
          Sign up with Google
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
