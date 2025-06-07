import React, { useState, useEffect } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import axios from "axios";

function App() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    industry: "",
    size: "",
    theme: "light",
    layout: "grid",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://onboarding-dashboard.onrender.com/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFormData((prev) => ({
            ...prev,
            ...res.data, // load company, industry, theme, layout, etc.
            password: "", // don't persist password
          }));
          localStorage.setItem("user", JSON.stringify(res.data));
          document.body.className = res.data.theme || "light";
          setStep(4); // skip to dashboard if already logged in
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
        });
    }
  }, []);

  const validateStep = () => {
    const err = {};
    if (step === 1) {
      if (!formData.name.trim()) err.name = "Name is required";
      if (!formData.email.trim()) err.email = "Email is required";
      if (!formData.password.trim()) err.password = "Password is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        err.email = "Invalid email";
    } else if (step === 2) {
      if (!formData.company.trim()) err.company = "Company is required";
      if (!formData.industry.trim()) err.industry = "Industry is required";
      if (!formData.size.trim()) err.size = "Size is required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      await axios.post(
        "https://onboarding-dashboard.onrender.com/api/preferences",
        {
          theme: formData.theme,
          layout: formData.layout,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(formData));
      document.body.className = formData.theme;
      setStep(4);
    } catch (err) {
      console.error("Error saving preferences:", err);
    }
  };

  const theme = formData.theme || "light";
  document.body.className = theme;

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir < 0 ? 100 : -100,
    }),
  };

  return (
    <div className="container-m">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step + (showUpdateProfile ? "-update" : "")}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {step === 1 && (
            <StepOne
              nextStep={nextStep}
              handleChange={handleChange}
              formData={formData}
              errors={errors}
              skipToDashboard={() => setStep(4)}
            />
          )}
          {step === 2 && (
            <StepTwo
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              formData={formData}
              errors={errors}
            />
          )}
          {step === 3 && (
            <StepThree
              prevStep={prevStep}
              handleChange={handleChange}
              formData={formData}
              handleSubmit={handleSubmit}
            />
          )}
          {step === 4 && !showUpdateProfile && (
            <Dashboard
              onUpdateProfileClick={() => setShowUpdateProfile(true)}
            />
          )}
          {step === 4 && showUpdateProfile && (
            <UpdateProfile
              formData={formData}
              handleChange={handleChange}
              onSave={() => setShowUpdateProfile(false)}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
