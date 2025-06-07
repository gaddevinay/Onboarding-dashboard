# 🚀 Onboarding Dashboard App

A full-stack onboarding dashboard web application built with React (frontend) and Node.js/Express + MongoDB (backend). It includes a multi-step onboarding wizard, user preferences, profile management, and JWT authentication.

---

## 📦 Tech Stack

### Frontend
- React
- Axios
- CSS or Tailwind
- Framer Motion (for transitions)
- localStorage

### Backend
- Node.js
- Express
- MongoDB (Atlas)
- Mongoose
- JWT
- bcrypt
- Joi (for input validation)
- dotenv

---

## 🖥️ Live Link: [https://onboarding-dashboard-plum.vercel.app](https://onboarding-dashboard-plum.vercel.app)

---
## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Onboarding-dashboard.git
cd Onboarding-dashboard
```

### 2. Install Dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> You can get `MONGO_URI` from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) after creating a cluster.

---

### 4. Start the Application

```bash
# Run backend server
cd backend
npm start

# In a new terminal window/tab
cd frontend
npm start
```

---

### 5. Access the App

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## ✨ Features

- 🔐 JWT-based user authentication
- 🪄 Multi-step onboarding wizard (3 steps)
- 💼 Save personal + business + preference data
- 🌙 Theme switcher & layout selector
- 📊 Dashboard view with cards & update option
- 💾 Data stored in MongoDB and synced to UI
- 📱 Fully responsive

---

## 📸 Screenshots

<img src="https://github.com/user-attachments/assets/277721dd-fda3-4b49-b71d-91f839e3538c" width="600" />
<br/>
<img src="https://github.com/user-attachments/assets/33d697ec-69df-4e84-a7d5-72ea59a4eef2" width="600" />
<br/>
<img src="https://github.com/user-attachments/assets/30ca9ca9-0e78-4deb-b12e-b3471d86338b" width="600" />
<br/>
<img src="https://github.com/user-attachments/assets/b71cfc6a-00da-4fdd-84c1-d6215be771e7" width="600" />

---



## 🧠 Bonus Ideas

- Add Recharts to display weekly activity
- Add email verification (sendgrid/mailgun)
- Add user roles or teams in dashboard
