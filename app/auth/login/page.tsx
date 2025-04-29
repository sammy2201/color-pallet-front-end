"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { validateEmail, validatePassword } from "../validate";
import Link from "next/link";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  useEffect(() => {
    setEmailError(false);
    setPasswordError(false);
  }, []);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateInputs = () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    let isValid = true;

    const emailValidation = validateEmail(email);
    setEmailError(!!emailValidation);
    setEmailErrorMessage(emailValidation);
    if (emailValidation) isValid = false;

    const passwordValidation = validatePassword(password);
    setPasswordError(!!passwordValidation);
    setPasswordErrorMessage(passwordValidation);
    if (passwordValidation) isValid = false;

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/login",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error login user:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="flex justify-center">
          <div className="shadow-three dark:bg-dark max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
            <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
              Sign in to your account
            </h3>
            <p className="text-body-color mb-8 text-center text-base font-medium">
              Login to your account for a faster checkout.
            </p>

            {/* Google Sign In */}
            <button
              onClick={() => alert("Sign in with Google")}
              className="mb-4 w-full border border-stroke bg-[#f8f8f8] px-6 py-3 rounded-xs text-base text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300">
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="mb-6 flex items-center justify-center">
              <span className="hidden sm:block w-full max-w-[70px] h-[1px] bg-body-color/50"></span>
              <p className="px-5 text-center text-base text-body-color font-medium">
                Or, sign in with your email
              </p>
              <span className="hidden sm:block w-full max-w-[70px] h-[1px] bg-body-color/50"></span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-dark dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                  className={`w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color transition-all duration-300 focus:border-primary outline-none dark:bg-[#2C303B] ${
                    emailError ? "border-red-500" : "border-stroke"
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">
                    {emailErrorMessage}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm text-dark dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                  className={`w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color transition-all duration-300 focus:border-primary outline-none dark:bg-[#2C303B] ${
                    passwordError ? "border-red-500" : "border-stroke"
                  }`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">
                    {passwordErrorMessage}
                  </p>
                )}
              </div>

              <div className="mb-6 flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-body-color">
                  <input type="checkbox" className="h-4 w-4" />
                  Keep me signed in
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full rounded-xs bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90">
                  Sign in
                </button>
              </div>
            </form>

            <p className="text-body-color text-center text-base font-medium">
              Don’t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
