# 🛒 E-commerce Website (MERN Stack)

## 📄 Project Overview
This is a full-stack e-commerce application built with the **MERN stack** (MongoDB, Express, React, Node.js). The application is organized into separate `frontend` and `backend` directories, each with clear responsibilities.

---

## 🏗️ Architecture

### 🔹 Frontend
- Built with **React** and **Vite**  
- State management using **Zustand**  
- Styling with **Tailwind CSS**  
- Animations using **Framer Motion**  

### 🔹 Backend
- **Node.js** with **Express**  
- **MongoDB** with **Mongoose** for data modeling  
- **JWT**-based authentication (access + refresh tokens)  
- **Redis** for caching and session/token management  
- Integration with external services:
  - **Cloudinary** for image storage  
  - **Stripe** for payment processing  

---

## ✨ Key Features

### 👥 User Authentication
- User registration and login  
- JWT-based access and refresh token system  
- Role-based authorization (customer/admin)  

### 🛍️ Product Management
- Browse products by category  
- Featured product listings  
- Admin dashboard for product creation and management  

### 🛒 Shopping Cart
- Add/remove items  
- Update item quantities  
- Apply coupon codes for discounts  

### 💳 Checkout Process
- **Stripe** integration for secure payments  
- Order creation and tracking  
- Coupon application  

### 🛠️ Admin Features
- Product management (add, delete, toggle featured)  
- Analytics dashboard  
- User management  

---

## 📦 Notable Technologies and Libraries

### 🔹 Frontend
- `Zustand` – State management  
- `React Router` – Navigation  
- `Axios` – API communication  
- `Lucide React` – Icon set  
- `React Hot Toast` – Notifications  

### 🔹 Backend
- `JWT` – Authentication  
- `Bcrypt` – Password hashing  
- `Cloudinary` – Image uploads  
- `Stripe` – Payment processing  
- `Redis` – Caching and token/session storage  

---

## 🗃️ Data Models
- **User**: Stores authentication and user info  
- **Product**: Product data including images, categories, prices  
- **Order**: Purchase/order records  
- **Coupon**: Discount codes and validation  

---

This application follows a modern **React architecture** with a component-based UI, custom hooks for API interaction, and a mobile-friendly design. It delivers a complete and responsive e-commerce experience for both customers and admins.
