"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";

const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  overflowY: "auto",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...(theme.applyStyles?.("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }) || {}),
}));

interface CardProps {
  children: React.ReactNode;
  variant?: "outlined" | "elevation";
  className?: string;
}

export default function Card({ children, variant, className }: CardProps) {
  return (
    <div className={className}>
      <StyledCard variant={variant}>{children}</StyledCard>
    </div>
  );
}
