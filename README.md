# 🧭 Onboarding Dashboard – Intern Sprint Project

Welcome to the **Onboarding Dashboard**, a 5-day sprint intern challenge project. This full-stack web app helps new users onboard quickly, set their preferences, and view their dashboard. Built with a modern stack focusing on usability, authentication, and user profile handling.

---

## 🔧 Tech Stack

### 🔹 Frontend:
- React
- CSS / Tailwind (optional)
- Axios
- Framer Motion (for transitions)
- LocalStorage (for caching user data)

### 🔹 Backend:
- Node.js + Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose ODM
- JWT (Authentication)
- bcrypt.js (Password hashing)
- Joi (Input validation)
- CORS + dotenv

---

## 🚀 Features

### ✅ Frontend

- 🧾 Multi-step Onboarding Wizard (3 steps)
  - Step 1: Personal Info (Name, Email)
  - Step 2: Business Info (Company, Industry, Size)
  - Step 3: Preferences (Theme, Dashboard Layout)
  - Input validation on all fields
  - Smooth transitions using Framer Motion

- 📊 Dashboard View
  - Displays user info: name, email, company, industry, size
  - Shows cards for: Team Members, Active Projects, Notifications
  - Fully responsive

- 🌗 Bonus Features
  - Light/Dark theme switch (saved in preferences)
  - Data stored in `localStorage` + synced with server
  - Token-based login persistence
  - Logout functionality

---

### ✅ Backend

- 🔐 Authentication Routes
  - `POST /api/register`: Register a new user
  - `POST /api/login`: Login and receive a JWT
  - `GET /api/profile`: Get user info (protected route)

- 🎛 Preferences & Profile
  - `PATCH /api/profile`: Update user info + preferences
  - JWT-based authorization
  - Joi validation on all input fields

- 📊 Dashboard Summary (Dummy)
  - `GET /api/dashboard-summary`: Returns counts of team, projects, and notifications

---

## 🖥️ Live Links: [https://onboarding-dashboard-plum.vercel.app](https://onboarding-dashboard-plum.vercel.app)
---

## ⚙️ Setup Instructions

### 🖥️ Backend

1. Clone the repo:

```bash
git clone https://github.com/your-username/Onboarding-dashboard.git
cd Onboarding-dashboard/backend
