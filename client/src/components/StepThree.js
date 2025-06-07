import React from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";
export default function StepThree({
  prevStep,
  handleChange,
  formData,
  handleSubmit,
}) {
  return (
    <div className="container">
      <ProgressBar step={3} />
      <h2>Step 3: Preferences</h2>
      <select name="theme" value={formData.theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select name="layout" value={formData.layout} onChange={handleChange}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>
      <div className="buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
