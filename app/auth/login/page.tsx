"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  GoogleIcon,
  FacebookIcon,
  SitemarkIcon,
} from "../../../components/customIcons";
import axios from "axios";
import { validateEmail, validatePassword } from "../validate";
import Card from "../../../components/cards/authCard";
import AuthContainer from "../../../components/cards/authContainer";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // Using Effect to Reset Errors After Hydration
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

    //email check
    const emailValidation = validateEmail(email);
    setEmailError(!!emailValidation);
    setEmailErrorMessage(emailValidation);
    if (emailValidation) isValid = false;

    //password check
    const passwordValidation = validatePassword(password);
    setPasswordError(!!passwordValidation);
    setPasswordErrorMessage(passwordValidation);
    if (passwordValidation) isValid = false;

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted!");
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error login user:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      <div className="">
        <AuthContainer direction="column" justifyContent="space-between">
          <CssBaseline enableColorScheme />
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                  error={emailError}
                  helperText={emailErrorMessage}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="••••••"
                  type="password"
                  inputRef={passwordRef}
                  id="password"
                  autoComplete="current-password"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}>
                Sign in
              </Button>
            </Box>
            <Divider>
              <Typography sx={{ color: "text.secondary" }}>or</Typography>
            </Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={() => alert("Sign in with Google")}>
                Sign in with Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FacebookIcon />}
                onClick={() => alert("Sign in with Facebook")}>
                Sign in with Facebook
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Link href="/auth/register" variant="body2">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Card>
        </AuthContainer>
      </div>
    </div>
  );
}
