//check mail
export const validateEmail = (email: string) => {
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address.";
  }
  return "";
};

//check password
export const validatePassword = (password: string) => {
  if (
    !password ||
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    return "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
  }
  return "";
};

// check name
export const validateName = (name: string) => {
  if (!name || name.length < 1) {
    return "Name is required.";
  }
  return "";
};

//check phone-number
export const validatePhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber || !/^\+\d{1,3}\d{7,15}$/.test(phoneNumber)) {
    return "Enter a valid phone number with country code (e.g., +46794783778).";
  }
  return "";
};
