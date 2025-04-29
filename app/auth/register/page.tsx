"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Metadata } from "next";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
} from "../validate"; // adjust the path if needed

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const [firstName = "", lastName = ""] = formData.fullName.trim().split(" ");
    const nameError = validateName(firstName) || validateName(lastName);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const phoneError = validatePhoneNumber(formData.phoneNumber);

    const newErrors = {
      fullName: nameError,
      email: emailError,
      password: passwordError,
      phoneNumber: phoneError,
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const [firstName = "", lastName = ""] = formData.fullName.trim().split(" ");
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: formData.email,
      password: formData.password,
      phone_number: formData.phoneNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/register",
        payload
      );
      if (response.status === 201) {
        router.push("/auth/login");
      } else {
        alert("Unexpected response. Check backend logs.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                Create your account
              </h3>
              <p className="text-body-color mb-11 text-center text-base font-medium">
                It’s totally free and super easy
              </p>

              <button className="mb-6 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:shadow-two">
                Sign in with Google
              </button>
              <button className="mb-6 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:shadow-two">
                Sign in with GitHub
              </button>

              <div className="mb-8 flex items-center justify-center">
                <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[60px] sm:block"></span>
                <p className="text-body-color w-full px-5 text-center text-base font-medium">
                  Or, register with your email
                </p>
                <span className="bg-body-color/50 hidden h-[1px] w-full max-w-[60px] sm:block"></span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="fullName"
                    className="mb-3 block text-sm text-dark dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:shadow-none"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm text-dark dark:text-white">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:shadow-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phoneNumber"
                    className="mb-3 block text-sm text-dark dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:shadow-none"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white">
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:shadow-none"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mb-6 flex">
                  <label
                    htmlFor="terms"
                    className="text-body-color flex text-sm font-medium">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mr-2 mt-1"
                    />
                    <span>
                      By creating an account, you agree to the{" "}
                      <a href="#0" className="text-primary hover:underline">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#0" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 w-full rounded-xs px-9 py-4 text-base font-medium text-white duration-300 shadow-submit dark:shadow-submit-dark">
                    Sign up
                  </button>
                </div>
              </form>

              <p className="text-body-color text-center text-base font-medium">
                Already using Startup?{" "}
                <Link
                  href="/auth/login"
                  className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute top-0 left-0 z-[-1]">
        {/* ... same SVG code you provided ... */}
      </div>
    </section>
  );
};

export default Register;
