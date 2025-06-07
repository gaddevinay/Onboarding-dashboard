import React from "react";
import "../App.css";

export default function Dashboard({ formData, onUpdateProfileClick, onLogout }) {
  return (
    <div className="container">
      <button className="logout" onClick={onLogout}>Logout</button>

      <h2>Welcome, {formData.name}!</h2>
      <p>Email: {formData.email}</p>
      <p>Company: {formData.company}</p>
      <p>Industry: {formData.industry}</p>
      <p>Size: {formData.size}</p>

      <button onClick={onUpdateProfileClick}>Update Data</button>

      <div className="card-container">
        <div className="card">Team Members: 5</div>
        <div className="card">Active Projects: 3</div>
        <div className="card">Notifications: 2</div>
      </div>
    </div>
  );
}
