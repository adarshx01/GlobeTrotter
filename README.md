# 🌍 GlobeTrotter – Personalized Travel Planning Platform

GlobeTrotter is a **TypeScript-based full-stack travel planning application** that allows users to plan, manage, and visualize multi-city trips with budgets, itineraries, and analytics in a single platform.

---

## 👥 Team Members

- Harsh Singh  
- Harsh Dubey  
- Adarsh Vishwakarma  
- Awangan Das  

---

## 🚀 Tech Stack

### Frontend
- Next.js (TypeScript)
- Tailwind CSS
- Recharts

### Backend
- TypeScript
- Better Auth
- PostgreSQL
- Prisma ORM
- Zod
- bcrypt

---

## ✨ Features

- Secure authentication (Login / Signup)
- Create and manage multi-city trips
- Add cities, activities, and dates
- Automatic budget calculation
- Expense analytics and charts
- Timeline / calendar-based itinerary
- Public shareable trip links
- Strong type safety across the app

---

## 📊 Analytics & Charts

The application uses **Recharts** to visualize:

- Budget distribution (transport, stay, activities)
- Cost per day
- City-wise expense comparison

All chart data is **strongly typed using TypeScript** to ensure reliability.

---

## 📂 Project Structure

── app/ # Next.js App Router (TypeScript)
├── prisma/ # Prisma schema & migrations
├── lib/ # Auth, DB, validators
├── components/ # Reusable UI components
├── types/ # Shared TypeScript types
├── utils/ # Helper functions
├── .env.example
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/globetrotter.git
cd globetrotter
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables

Create a .env file in the root directory and add:

DATABASE_URL=postgresql://user:password@localhost:5432/globetrotter
AUTH_SECRET=your_auth_secret
Setup Database (Prisma)

Run the following commands:

npx prisma migrate dev
npx prisma generate
5️⃣ Run the Application
npm run dev


The application will run at:
👉 http://localhost:3000
🧪 Available Scripts
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Lint TypeScript code
npx prisma studio  # Visual database manager


