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


<ul>
  <li><strong>/project-root</strong>
    <ul>
      <li><strong>/frontend</strong> – React App
        <ul>
          <li><strong>/pages</strong> – Login, Register, Create, Edit, SinglePost</li>
          <li><strong>/components</strong> – Navbar, ProtectedRoute</li>
          <li><strong>/styles</strong> – CSS files with dark mode support</li>
          <li><strong>/api.js</strong> – Axios instance for backend API calls</li>
        </ul>
      </li>
      <li><strong>/backend</strong> – Node/Express API
        <ul>
          <li><strong>/models</strong> – User & Post Mongoose schemas</li>
          <li><strong>/routes</strong> – Auth and Post route handlers</li>
          <li><strong>/middleware</strong> – JWT authentication middleware</li>
          <li><strong>/server.js</strong> – Entry point for the backend server</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>


