"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { validateEmail, validatePassword } from "../validate";
import { Metadata } from "next";

const SigninPage = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEmailError(false);
    setPasswordError(false);
  }, []);

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
      console.log("Login success:", response.data);
      // handle successful login (redirect, token storage, etc.)
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
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
            <p className="text-body-color mb-11 text-center text-base font-medium">
              Login to your account for a faster checkout.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="text-dark mb-3 block text-sm dark:text-white">
                  Your Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className={`w-full rounded-xs border px-6 py-3 text-base outline-none transition-all duration-300 ${
                    emailError
                      ? "border-red-500"
                      : "border-stroke bg-[#f8f8f8] dark:border-transparent dark:bg-[#2C303B]"
                  } dark:text-body-color-dark`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">
                    {emailErrorMessage}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="text-dark mb-3 block text-sm dark:text-white">
                  Your Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className={`w-full rounded-xs border px-6 py-3 text-base outline-none transition-all duration-300 ${
                    passwordError
                      ? "border-red-500"
                      : "border-stroke bg-[#f8f8f8] dark:border-transparent dark:bg-[#2C303B]"
                  } dark:text-body-color-dark`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">
                    {passwordErrorMessage}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300">
                  Sign in
                </button>
              </div>
            </form>

            <p className="text-body-color text-center text-base font-medium">
              Don’t you have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
