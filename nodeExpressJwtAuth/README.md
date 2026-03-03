# Ninja Smoothies - JWT Authentication App

A full-stack authentication system built with **Node.js**, **Express**, **MongoDB**, and **JSON Web Tokens (JWT)**.

This project demonstrates secure user authentication using hashed passwords, HTTP-only cookies, protected routes, and middleware-based authorization.

---

## 🚀 Features

- User Registration (Signup)
- User Login
- Password Hashing with bcrypt
- JWT Token Authentication
- HTTP-only Cookie Storage
- Protected Routes with Middleware
- Custom Error Handling
- MongoDB + Mongoose Integration
- Server-Side Rendering with EJS

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (jsonwebtoken)
- bcrypt
- EJS
- cookie-parser
- dotenv

---

## 📂 Project Structure

---

## 🔐 Authentication Flow

### 📝 Signup

1. User submits email and password  
2. Password is hashed using bcrypt before saving  
3. User is stored in MongoDB  
4. JWT token is generated  
5. Token is stored in an HTTP-only cookie  
6. User is redirected to home  

### 🔑 Login

1. Email is verified  
2. Password is compared with hashed password  
3. JWT token is generated  
4. Token is stored in cookie  
5. Protected routes become accessible  

### 🔒 Protected Route

- `/smoothies` requires authentication  
- `requireAuth` middleware verifies JWT before allowing access  
- Unauthorized users are redirected to `/login`  

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

⚠️ Never hardcode secrets in production. Always use environment variables.

---

## 🧪 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd nodeExpressJwtAuth