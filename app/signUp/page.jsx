"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import Icon from "../Icon/Icon";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Welcome to</h2>
      <h2 className="text-3xl font-bold mb-2 text-center">Kings MoneyBox</h2>
      <h2 className="text-xl font-medium mb-7 text-center">
        Create an account to enjoy our solutions
      </h2>
      <div className="w-full max-w-md bg-[#565656] rounded-t-2xl shadow-md px-11 py-8">
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
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
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onPaste={handlePaste}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password"
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
            Hint: Password should contain:
          </p>
          <div className=" flex mb-4 text-[#FFFFFF] text-[.6rem] items-center space-x-2">
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
            <Icon name="checkmark" className="text-white" />
              Uppercase
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
            <Icon name="checkmark" className="text-white" />
              Lowercase
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
            <Icon name="checkmark" className="text-white" />
              Digits
            </div>
            <div className="flex items-center gap-[.3rem] bg-[#949494] rounded-md px-2 py-1">
            <Icon name="checkmark" className="text-white" />
              Special character
            </div>
          </div>
          <div className="mb-6 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
            Create Account
            <Icon name="arrowRight" className="text-[#333333]" />
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
        >
          Sign up with Google
          <Icon name="arrowRight" className="text-[#FFE86B]" />
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
