"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "@/components/cards/AuthCard";
import InputField from "@/components/cards/AuthInputField";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
} from "../validate";

const RegisterPage = () => {
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
        router.push("/signin");
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
      <div className="container flex justify-center">
        <AuthCard
          title="Create your account"
          subtitle="It’s totally free and super easy">
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <InputField
              type="email"
              name="email"
              label="Work Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <div className="mb-6 flex">
              <input type="checkbox" required className="mr-2 mt-1" />
              <span className="text-sm text-body-color">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
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
            Already have an account?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </AuthCard>
      </div>
    </section>
  );
};

export default RegisterPage;
