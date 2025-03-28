"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import {
  GoogleIcon,
  FacebookIcon,
  SitemarkIcon,
} from "../../../components/customIcons";
import axios from "axios";

const Card = styled(MuiCard)(({ theme }) => ({
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
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function Register(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");

  // Using Effect to Reset Errors After Hydration
  useEffect(() => {
    setEmailError(false);
    setPasswordError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setPhoneNumberError(false);
  }, []);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const validateInputs = () => {
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const phoneNumber = phoneNumberRef.current?.value || "";

    let isValid = true;

    //email check
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    //password check
    if (
      !password ||
      password.length < 8 ||
      !/[A-Z]/.test(password) || // At least one uppercase letter
      !/[a-z]/.test(password) || // At least one lowercase letter
      !/[0-9]/.test(password) || // At least one number
      !/[!@#$%^&*(),.?":{}|<>]/.test(password) // At least one special character
    ) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character."
      );
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    //first-name check
    if (!firstName || firstName.length < 1) {
      setFirstNameError(true);
      setFirstNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage("");
    }

    //last-name check
    if (!lastName || lastName.length < 1) {
      setLastNameError(true);
      setLastNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage("");
    }

    if (!phoneNumber || !/^\+\d{1,3}\d{7,15}$/.test(phoneNumber)) {
      setPhoneNumberError(true);
      setPhoneNumberErrorMessage(
        "Enter a valid phone number with country code (e.g., +46794783778)."
      );
      isValid = false;
    } else {
      setPhoneNumberError(false);
      setPhoneNumberErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      firstNameError ||
      firstNameError ||
      emailError ||
      passwordError ||
      phoneNumberError
    ) {
      return;
    }
    const data = new FormData(event.currentTarget);
    const userData = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      phone_number: data.get("phoneNumber"),
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        userData
      );
      if (response.status === 201) {
        alert("Registration successful! Redirecting...");
        window.location.href = "/auth/login";
      } else {
        alert("Unexpected response. Check backend logs.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <TextField
                autoComplete="firstName"
                name="firstName"
                inputRef={firstNameRef}
                required
                fullWidth
                id="firstName"
                placeholder="Jon Snow"
                error={firstNameError}
                helperText={firstNameErrorMessage}
                color={firstNameError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <TextField
                autoComplete="lastName"
                name="lastName"
                required
                fullWidth
                id="lastName"
                placeholder="Jon Snow"
                inputRef={lastNameRef}
                error={lastNameError}
                helperText={lastNameErrorMessage}
                color={lastNameError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                inputRef={emailRef}
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="firstName">Phone Number</FormLabel>
              <TextField
                autoComplete="phoneNumber"
                name="phoneNumber"
                inputRef={phoneNumberRef}
                required
                fullWidth
                id="phoneNumber"
                placeholder="+46 793784891"
                error={phoneNumberError}
                helperText={phoneNumberErrorMessage}
                color={phoneNumberError ? "error" : "primary"}
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
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}>
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Google")}
              startIcon={<GoogleIcon />}>
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Facebook")}
              startIcon={<FacebookIcon />}>
              Sign up with Facebook
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                href="/auth/login"
                variant="body2"
                sx={{ alignSelf: "center" }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </div>
  );
}
