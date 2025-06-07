import React from "react";
import "../App.css";
import axios from "axios";
import ProgressBar from "./ProgressBar";

export default function StepOne({ nextStep, handleChange, formData, errors, skipToDashboard }) {
  const handleRegisterAndNext = async () => {
    try {
      // Try to register
      const registerRes = await axios.post("https://onboarding-dashboard.onrender.com/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      const token = registerRes.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(formData));

      console.log("✅ Registration successful");
      nextStep(); // Go to StepTwo
    } catch (err) {
      const msg = err.response?.data?.message;
      if (msg?.includes("already exists")) {
        console.log("⚠️ User already exists, attempting login...");

        try {
          const loginRes = await axios.post("https://onboarding-dashboard.onrender.com/api/login", {
            email: formData.email,
            password: formData.password,
          });

          const token = loginRes.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(formData));

          console.log("✅ Login successful");
          skipToDashboard(); // Go directly to dashboard
        } catch (loginErr) {
          alert("Login failed: " + (loginErr.response?.data?.message || loginErr.message));
        }
      } else {
        alert("Registration error: " + (msg || err.message));
      }
    }
  };

  return (
    <div className="container">
      <ProgressBar step={1} />
      <h2>Step 1: Personal Info</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span className="error">{errors.password}</span>}

      <button onClick={handleRegisterAndNext}>Next</button>
    </div>
  );
}
