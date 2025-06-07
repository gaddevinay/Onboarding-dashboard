import React, { useEffect, useState } from "react";
import "../App.css";

export default function Dashboard({ onUpdateProfileClick }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));
    setUser(saved);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <button className="logout"
        onClick={() => {
          window.location.reload();
        }}
      >
        Logout
      </button>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <button onClick={onUpdateProfileClick}>Update Data</button>
      <div className="card-container">
        <div className="card">Team Members: 5</div>
        <div className="card">Active Projects: 3</div>
        <div className="card">Notifications: 2</div>
      </div>
    </div>
  );
}
