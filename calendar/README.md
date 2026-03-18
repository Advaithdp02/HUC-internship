# 📅 Calendar App (Next.js + MongoDB)

A simple full-stack calendar application where users can register, log in, and manage their daily events.

---

## 🚀 Features

* 🔐 User Authentication (Register & Login)
* 📅 Monthly Calendar View
* ➕ Add Events by clicking on a date
* 👀 View events directly inside calendar cells
* 🔄 Navigate between months
* 🗑️ Update & Delete events (API ready)

---

## 🛠️ Tech Stack

**Frontend**

* Next.js (App Router)
* Tailwind CSS
* Day.js

**Backend**

* Next.js API Routes
* MongoDB (Mongoose)
* JWT Authentication

---

## 📁 Project Structure

```
app/
 ├── api/
 │   ├── auth/
 │   ├── events/
 ├── components/
 │   ├── Calendar.tsx
 │   ├── EventModal.tsx
 │   ├── Navbar.tsx
 ├── login/
 ├── register/
 ├── utils/
 │   ├── api.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/calendar-app.git
cd calendar-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run the app

```bash
npm run dev
```

App will run on:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Events

* `GET /api/events`
* `POST /api/events`
* `PUT /api/events/:id`
* `DELETE /api/events/:id`

---

## 🧪 How It Works

1. User registers or logs in
2. JWT token is stored in localStorage
3. Token is sent with every request
4. User can create and view events on the calendar

---

