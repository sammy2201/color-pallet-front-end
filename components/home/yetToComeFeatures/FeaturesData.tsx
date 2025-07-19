import { Feature } from "../../../types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4H20V6H4V4ZM4 9H20V11H4V9ZM4 14H14V16H4V14Z"
          fill="#3A59D1"
        />
      </svg>
    ),
    title: "Tech Stack Recommender",
    paragraph:
      "Tell us about your business and we’ll suggest the best technologies to build it tailored to your team size, budget, and goals.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40"
        height="40">
        <circle cx="4" cy="4" r="2" fill="#3A59D1" />
        <circle cx="8" cy="8" r="2" fill="#3A59D1" />
        <circle cx="12" cy="12" r="2" fill="#3A59D1" />
        <circle cx="16" cy="16" r="2" fill="#3A59D1" />
        <circle cx="20" cy="20" r="2" fill="#3A59D1" />
        <path
          d="M4 4V8L8 8V12L12 12V16L16 16V20L20 20"
          stroke="#3A59D1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Project Roadmap Generator",
    paragraph:
      "Answer a few questions and get a detailed development roadmap with phases, priorities, and timelines.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 1.5C6.75 1.5 2.5 5.75 2.5 11C2.5 16.25 6.75 20.5 12 20.5C17.25 20.5 21.5 16.25 21.5 11C21.5 5.75 17.25 1.5 12 1.5ZM12 3C16.42 3 20 6.58 20 11C20 15.42 16.42 19 12 19C7.58 19 4 15.42 4 11C4 6.58 7.58 3 12 3ZM11.25 6V11.25L15.75 13.92L16.5 12.66L12.75 10.5V6H11.25Z"
          fill="#3A59D1"
        />
      </svg>
    ),
    title: "Time & Cost Estimator",
    paragraph:
      "Estimate how long your project might take and what it could cost, whether you're hiring or building solo.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 4H21V20H3V4ZM5 6V18H19V6H5ZM12 7C14.21 7 16 8.79 16 11C16 13.21 14.21 15 12 15C9.79 15 8 13.21 8 11C8 8.79 9.79 7 12 7Z"
          fill="#3A59D1"
        />
      </svg>
    ),
    title: "Logo Style Suggestion",
    paragraph:
      "Answer a few brand questions and get ideas for logo styles (minimal, playful, bold, etc.)",
  },
  {
    id: 5,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C7.58 2 4 3.79 4 6V18C4 20.21 7.58 22 12 22C16.42 22 20 20.21 20 18V6C20 3.79 16.42 2 12 2ZM6 6C6 5.34 8.69 4 12 4C15.31 4 18 5.34 18 6C18 6.66 15.31 8 12 8C8.69 8 6 6.66 6 6ZM6 9.3C7.24 10.16 9.51 10.7 12 10.7C14.49 10.7 16.76 10.16 18 9.3V11.3C18 11.96 15.31 13.3 12 13.3C8.69 13.3 6 11.96 6 11.3V9.3ZM6 14.6C7.24 15.46 9.51 16 12 16C14.49 16 16.76 15.46 18 14.6V16.6C18 17.26 15.31 18.6 12 18.6C8.69 18.6 6 17.26 6 16.6V14.6Z"
          fill="#3A59D1"
        />
      </svg>
    ),
    title: "Database Schema Helper",
    paragraph:
      "Just share your app idea and we’ll suggest a basic database layout with key tables and relationships for both SQL and NoSQL.",
  },
];
export default featuresData;
