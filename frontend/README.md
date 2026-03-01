# 🥗 Nutrition Club (TypeScript Edition)

A full-stack web application built using **TypeScript**, designed to help users manage nutrition plans, track dietary habits, and maintain a healthy lifestyle through structured meal tracking and analytics.

---

## 📌 Overview

Nutrition Club is a health-focused web platform that allows users to:

- Track daily meals and calorie intake
- Monitor nutritional values (Protein, Carbs, Fats, etc.)
- Create and follow diet plans
- Maintain personal health records
- View progress through interactive dashboards

This project emphasizes **type safety, scalability, and maintainable architecture** using TypeScript across the stack.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login (JWT Authentication)
- Profile Management
- Daily Meal Tracking
- Calorie & Nutrient Calculation
- Diet Plan Creation
- Progress Monitoring Dashboard
- Meal History Tracking

### 🛠 Admin Features
- Add / Edit / Delete Food Items
- Manage Nutrition Database
- Monitor User Activities
- Generate Reports

---

## 🏗️ Tech Stack

### Frontend
- React.js
- TypeScript
- HTML5
- CSS3
- REACT-HOOK-FORM
- YUP VALIDATION

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB

### Tools & Libraries
- REST APIs
- JWT Authentication
- bcrypt (Password Hashing)
- Mongoose
- Git & GitHub

---

## 🏛️ System Architecture

Client (React + TypeScript)
⬇
REST API (Node.js + Express + TypeScript)
⬇
MongoDB Database

---

## 🔐 Authentication & Security

- JWT-based Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control (User/Admin)
- Environment Variable Protection

---

## 📂 Project Structure
backend/
│
├── config/                # Database & environment configuration
│
├── controllers/           # Route controllers (business logic)
│   ├── auth.controller.ts
│   ├── member.controller.ts
│   ├── membership.controller.ts
│   ├── attendance.controller.ts
│   ├── progressTracking.controller.ts
│   └── weeklyProgram.controller.ts
│
├── middlewares/           # Authentication & authorization middleware
│   ├── auth.middleware.ts
│
├── models/                # Mongoose models
│   ├── User.model.ts
│   ├── Member.model.ts
│   ├── Membership.model.ts
│   ├── Attendance.model.ts
│   ├── ProgressTracking.model.ts
│   ├── WeeklyProgram.model.ts
│   ├── BodyMeasurement.model.ts
│   ├── WeightCheck.model.ts
│   └── ReferralReward.model.ts
│
├── routes/                # Express route definitions
│   ├── auth.routes.ts
│   ├── member.routes.ts
│   ├── membership.routes.ts
│   ├── attendance.routes.ts
│   ├── progressTracking.routes.ts
│   └── bodyMeasurement.routes.ts
│
├── utils/                 # Utility/helper functions
│   ├── membership.util.ts
│
├── .env                   # Environment variables
├── app.ts                 # Express app setup
├── server.ts              # Server entry point
├── tsconfig.json          # TypeScript config
├── package.json
└── package-lock.json

frontend/
│
├── public/                # Static files
│
├── src/
│   │
│   ├── assets/            # Images, icons, styles
│   │
│   ├── components/        # Reusable UI components
│   │   ├── dashboard/
│   │   └── landing/
│   │
│   ├── context/           # React Context (AuthContext)
│   │   └── AuthContext.tsx
│   │
│   ├── hooks/             # Custom hooks
│   │   └── useAuth.ts
│   │
│   ├── layouts/           # Layout wrappers (DashboardLayout)
│   │
│   ├── pages/             # Application pages
│   │   ├── public/
│   │   │   └── Landing.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── members/
│   │   │   └── memberships/
│   │   │
│   │   └── user/
│   │       └── UserDashboard.tsx
│   │
│   ├── routes/            # React Router configuration
│   │   ├── AppRoutes.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── RoleRoute.tsx
│   │
│   ├── services/          # API service layer (Axios)
│   │   ├── axiosInstance.ts
│   │   ├── authService.ts
│   │   ├── memberService.ts
│   │   └── membershipService.ts
│   │
│   ├── types/             # TypeScript interfaces
│   │
│   ├── validation/        # Yup validation schemas
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.html
│
├── tsconfig.json
├── eslint.config.js
├── package.json
└── package-lock.json

## 🏗 Architecture Overview

- Backend: Node.js + Express + MongoDB + TypeScript
- Frontend: React + TypeScript + Material UI
- Authentication: JWT + Role-based access
- Form Handling: React Hook Form + Yup
- API Communication: Axios