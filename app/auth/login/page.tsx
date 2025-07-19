"use client";

import { useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import AuthCard from "@/components/cards/AuthCard";
import InputField from "@/components/cards/AuthInputField";
import { validateEmail, validatePassword } from "../validate";

const SigninPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    let valid = true;

    const emailMsg = validateEmail(email);
    const passwordMsg = validatePassword(password);

    setEmailError(emailMsg);
    setPasswordError(passwordMsg);

    if (emailMsg || passwordMsg) valid = false;
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const userData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        userData
      );
      console.log("Login success:", res.data);
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container flex justify-center">
        <AuthCard
          title="Sign in to your account"
          subtitle="Login to your account for a faster checkout.">
          <form onSubmit={handleSubmit}>
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              inputRef={emailRef}
              error={emailError}
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              inputRef={passwordRef}
              error={passwordError}
            />
            <div className="mb-6">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 w-full rounded-xs px-9 py-4 text-base font-medium text-white duration-300 shadow-submit dark:shadow-submit-dark">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-body-color text-center text-base font-medium">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </AuthCard>
      </div>
    </section>
  );
};

export default SigninPage;
