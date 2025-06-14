import React from "react";
import "../App.css";
import axios from "axios";

export default function UpdateProfile({ formData, handleChange, onSave }) {
  const handleSave = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.patch(
        "https://onboarding-dashboard.onrender.com/api/profile",
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          industry: formData.industry,
          size: formData.size,
          theme: formData.theme,
          layout: formData.layout,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      document.body.className = res.data.theme;
      onSave();
    } catch (err) {
      alert(
        "Profile update failed: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="container update">
      <h2>Update Your Profile</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        name="industry"
        placeholder="Industry"
        value={formData.industry}
        onChange={handleChange}
      />
      <input
        name="size"
        placeholder="Company Size"
        value={formData.size}
        onChange={handleChange}
      />
      <select name="theme" value={formData.theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select name="layout" value={formData.layout} onChange={handleChange}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
