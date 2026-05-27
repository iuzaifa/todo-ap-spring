# Todo App Frontend

Frontend application for the Todo Management System built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

---

# Project Setup

## 1. Clone Repository

```bash
git clone -b feature/frontend git@github.com:iuzaifa/todo-ap-spring.git
```

Go to project folder:

```bash
cd todo-ap-spring
```

---

## 2. Install Dependencies

Using npm:

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
VITE_API_URL=http://localhost:8080/api
```

Make sure your Spring Boot backend server is running on port `8080`.

---

## 4. Run Development Server

```bash
npm run dev
```

Application will run on:

```text
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Backend Repository / Branch

Backend code is available in the `main` branch.

Frontend code is available in the `feature/frontend` branch.

---

# Required Software

Make sure these are installed:

- Node.js (Latest LTS recommended)
- npm
- Git

---

# Features

- User Authentication
- JWT Token Handling
- Task Management
- Protected Routes
- Toast Notifications
- Responsive UI

---

# Folder Structure

```text
src/
 ├── api/
 ├── components/
 ├── pages/
 ├── routes/
 ├── utils/
 ├── assets/
 └── App.tsx
```

---

# Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

# Author

Abu Huzaifa