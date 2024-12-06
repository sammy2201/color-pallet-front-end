"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Check() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/home/check") // Example API
      .then((response) => {
        setData(response.data); // Set the response data to state
      })
      .catch((err) => {
        setError("Error fetching data"); // Handle errors
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there is an error
  }

  if (!data) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <div>
      <ol>
        <li>Get started by editing app/page.tsx. {data.message}</li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}