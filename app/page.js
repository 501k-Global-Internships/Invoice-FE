"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import axios from './api/axios';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const router = useRouter();

  const errRef = useRef();
  const LOGIN_URL = '/sign-in';

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password }
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify(payload),
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
    } catch (err) {
      if (!err?.response) {
        console.log(err);
        setErrMsg('Server Not Responding!');
      } else if (err.response?.status === 400) {
        setErrMsg('Oops! Something went wrong. Invalid Email or Password.');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized! Invalid Email or Password.');
      }  else if (err.response?.status === 404) {
        setErrMsg('We do not have a user with this email. Please sign up.');
      } else {
        setErrMsg('Login Failed!');
      }
      errRef.current.focus();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="font-medium text-center">
        Login to your account to continue
      </h2>
      <h2 className='font-medium mb-7 text-center'>where you left off</h2>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <div className="w-full max-w-md bg-[#565656] rounded-t-lg shadow-md px-11 py-11">
        <form onSubmit={handleSubmit}>
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
          <div className=" mb-4 text-end">
            <Link href="/resetPassword" className="text-[#FAFAFA] hover:text-gray-300">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFD700] font-medium rounded-md hover:bg-[#e4c93e] transition-colors duration-300 mb-4"
          >
            Login
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
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 bg-[#565656]"
              />
              <label htmlFor="rememberMe" className="text-[#FAFAFA]">
                Remember me
              </label>
            </div>
            <p className="text-[#FAFAFA]">
              New User?
              <Link href="/signUp" className="text-[#FAFAFA] hover:text-gray-300">
                <span> Sign up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex bg-[#333333] w-full max-w-md items-center justify-center rounded-b-lg shadow-md px-6 py-7">
        <button
          type="button"
          className="flex items-center justify-center gap-3 text-[#FFE86B]"
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

export default LoginForm;