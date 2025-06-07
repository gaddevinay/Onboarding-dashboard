import React from "react";
import "../App.css";

export default function UpdateProfile({ formData, handleChange, onSave }) {
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

      <button
        onClick={() => {
          localStorage.setItem("user", JSON.stringify(formData));
          document.body.className = formData.theme;
          onSave(); // closes the update view
        }}
      >
        Save
      </button>
    </div>
  );
}
