"use client";

import React from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, subtitle, children }) => {
  return (
    <div className="shadow-three dark:bg-dark max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
      <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
        {title}
      </h3>
      <p className="text-body-color mb-11 text-center text-base font-medium">
        {subtitle}
      </p>
      {children}
    </div>
  );
};

export default AuthCard;
