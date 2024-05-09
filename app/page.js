'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon/Icon";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="font-medium text-center">
        Login to your account to continue
      </h2>
      <h2 className="font-medium mb-7 text-center">where you left off</h2>
      <div className="w-full max-w-md bg-[#565656] rounded-t-lg shadow-md px-11 py-11">
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>
          <div className="mb-4 relative">
            <input
              value={password}
              type={visible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <FontAwesomeIcon
                icon={visible ? faEye : faEyeSlash}
                className="text-gray-500 cursor-pointer"
                onClick={() => setVisible(!visible)}
              />
            </div>
          </div>
          <div className=" mb-4 text-end">
            <Link
              href="/resetPassword"
              className="text-[#FAFAFA] hover:text-gray-300"
            >
              Forgot your password?
            </Link>
          </div>
          <Link
            href="#"
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFD700] font-medium rounded-md hover:bg-[#e4c93e] transition-colors duration-300 mb-4"
          >
            Login
            <Icon name="arrowRight" className="text-[#333333]" />
          </Link>
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
              <Link
                href="/signUp"
                className="text-[#FAFAFA] hover:text-gray-300"
              >
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
          <Icon name="arrowRight" className="text-[#FFE86B]" pathClassName="stroke-current" />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
