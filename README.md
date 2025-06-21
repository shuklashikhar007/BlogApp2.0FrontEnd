# 📝 BlogApp 2.0 — MERN Stack Blog Platform

![GitHub last commit](https://img.shields.io/github/last-commit/shuklashikhar007/BlogApp2.0FrontEnd?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/shuklashikhar007/BlogApp2.0FrontEnd?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![MERN](https://img.shields.io/badge/stack-MERN-blueviolet?style=flat-square)

> A full-stack blog platform with authentication, protected routes, post management, dark mode toggle, and responsive UI.

---

## 🔗 Live Demo

- 🔥 **Frontend**: [https://your-frontend.vercel.app](https://blog-app2-0-front-end.vercel.app/)
- 🌐 **Backend**: [https://blogapp2-0.onrender.com](https://github.com/shuklashikhar007/BlogApp2.0)

---

## 🚀 Features

- ✅ **User Authentication** (Email & Password, Gmail-style)
- 🔐 **JWT-based Auth** with Protected Routes
- 📝 Create, Edit, and Delete Posts (Only for logged-in users)
- 🌓 **Dark Mode** toggle with localStorage persistence
- 💠 **Responsive Grid View** for posts
- 🧭 **React Router** navigation
- ⚡ Clean animations and transitions

---

## 🛠️ Tech Stack

| Frontend      | Backend       | Database     | Deployment |
|---------------|---------------|--------------|------------|
| React.js      | Node.js       | MongoDB Atlas| Vercel (UI) |
| Axios         | Express.js    | Mongoose     | Render (API) |
| React Router  | JWT Auth      | Bcrypt       |            |

---

## 📁 Project Structure


/project-root
│
├── /frontend # React App
│ ├── /pages # Login, Register, Create, Edit, SinglePost
│ ├── /components # Navbar, ProtectedRoute
│ ├── /styles # CSS for all pages (dark mode support)
│ └── /api.js # Axios instance
│
└── /backend # Node/Express API
├── /models # User, Post schemas
├── /routes # Auth & Post APIs
├── /middleware # JWT Middleware
└── /server.js # Entry point


