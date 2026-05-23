# JobReco Frontend

JobReco is an AI-powered job recommendation platform. This repository contains the **frontend** web application: a marketing landing experience, authentication flows, and a protected user dashboard for CV-based job matching.

Upload a CV, let the system analyze skills and experience, and receive job recommendations with match scores and skill-gap insights.

## Features

- **Landing page** — Hero, stats, features, how-it-works, testimonials, and CTA sections (Vietnamese UI)
- **Authentication** — Login and register pages with form validation ([react-hook-form](https://react-hook-form.com/))
- **Protected dashboard** — Route guard redirects unauthenticated users to login
- **Client-side auth state** — [Zustand](https://zustand.docs.pmnd.rs/) store with `localStorage` persistence
- **Responsive layout** — Shared header/footer via layout components; sticky header with auth-aware actions
- **Animations & feedback** — [Framer Motion](https://www.framer.com/motion/) on the landing hero; [react-hot-toast](https://react-hot-toast.com/) for notifications

> **Note:** Login currently uses mock user data (no backend API wired yet). Dependencies such as `axios`, `react-dropzone`, and `recharts` are included for upcoming API, CV upload, and analytics work.

## How to run the project

### 1. Clone and navigate to the project directory

```bash
git clone https://github.com/nhdkn16/jobreco-fe.git
cd jobreco-fe
```

If you already have the source code, simply open the terminal in the `jobreco-fe` directory.

### 2. Install dependencies

```bash
npm install
```
This command loads all libraries in `package.json` (React, Vite, Tailwind, …) into the `node_modules` directory.

### 3. Running the development environment

```bash
npm run dev
```
After successful execution, the terminal will display the local address, usually:

```
http://localhost:5173
```
Open that link in your browser (Chrome, Edge, Firefox, ...). Vite supports **Hot Module Replacement (HMR)** — when you edit the code and save the file, the website automatically updates without reloading the entire site.
Stop the server: press `Ctrl + C` in the terminal.

### 4. Build and Run Production (Optional)

```bash
# Create a directory named `dist/` to contain the optimized build file
npm run build

# Run the preview server to view the build
npm run preview
```

By default, `npm run preview` also serves at `http://localhost:4173` (or another port if occupied — see the terminal log).

### 5. Check Code (Lint)

```bash
npm run lint
```

### npm Commands

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Run dev server (HMR)       |
| `npm run build`   | Build production → `dist/` |
| `npm run preview` | Preview the local build    |
| `npm run lint`    | Run ESLint                 |

## Tech stack

| Category   | Libraries                            |
|------------|--------------------------------------|
| Framework  | React 19                             |
| Build tool | Vite 8                               |
| Styling    | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing    | React Router 7                       |
| State      | Zustand                              |
| Forms      | React Hook Form                      |
| Icons      | Lucide React                         |
| HTTP       | Axios                                | 

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20 LTS or higher recommended)

- npm (or pnpm /yarn)

Check installed version:

```bash
node -v
npm -v
```

## Project structure

```
jobreco-fe/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── landing/        # Home page sections (Hero, Features, …)
│   │   └── layout/         # Header, Footer
│   ├── layouts/            # MainLayout, AuthLayout
│   ├── pages/
│   │   ├── auth/           # Login, Register
│   │   ├── dashboard/      # Dashboard (protected)
│   │   └── landing/        # Home, About
│   ├── routes/
│   │   ├── AppRoutes.jsx   # Route definitions
│   │   └── Route.jsx       # ProtectedRoute wrapper
│   ├── store/
│   │   └── authStore.js    # Auth state (Zustand)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind entry
├── index.html
├── vite.config.js
└── package.json
```

## Routes

| Path         | Access    | Description            |
|--------------|-----------|------------------------|
| `/`          | Public    | Landing page           |
| `/about`     | Public    | About page             |
| `/login`     | Public    | Login (auth layout)    |
| `/register`  | Public    | Register (auth layout) |
| `/dashboard` | Protected | User dashboard         |

## License

Private project — see repository owner for usage terms.
