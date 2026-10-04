# Full Stack Hello World

A starter full stack web application built during **Task 1: Fundamentals and Setup** of my Full Stack Developer Fresher internship at Yuvaintern. A **React** frontend fetches a message from an **Express.js** backend through a REST API, confirming that the whole development environment works end to end.

## Features

- REST API endpoint `GET /api/hello` that returns a JSON message
- React frontend (built with Vite) that fetches and displays the backend message
- CORS enabled for communication between the two servers
- Fallback message shown if the backend is unreachable

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, JavaScript |
| Backend | Node.js, Express.js, CORS |
| Tools | Git, GitHub, VS Code, Postman |

## Project Structure

```
Full-Stack-Hello-World/
├── backend/
│   ├── server.js        # Express server and API route
│   └── package.json
├── frontend/
│   ├── src/
│   │   └── App.jsx      # React component that calls the API
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org) (LTS version)
- npm (comes with Node.js)
- Git

Check your installation:

```bash
node -v
npm -v
git --version
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/monishasundaram/Full-Stack-Hello-World.git
cd Full-Stack-Hello-World
```

### 2. Run the backend

```bash
cd backend
npm install
node server.js
```

The server runs at `http://localhost:5000`.

### 3. Run the frontend

Open a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). You should see:

> Hello World from the backend!

## API Reference

### `GET /api/hello`

Returns a greeting message.

**Response**

```json
{
  "message": "Hello World from the backend!"
}
```

## Screenshots

| Backend response | Frontend output |
|------------------|-----------------|
| ![API response](screenshots/api.png) | ![Frontend](screenshots/frontend.png) |

## What I Learned

- Setting up a complete full stack development environment
- Organising a project with separate frontend and backend folders
- Building a REST API with Express and consuming it from React
- Handling CORS errors between two local servers
- Using Git and GitHub: commits, branches, and pushing to a remote repository

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm error ENOENT package.json` | Run commands inside `backend` or `frontend`, not the root folder |
| Page shows "Could not reach backend" | Make sure `node server.js` is running in the backend terminal |
| CORS error in the browser console | Confirm `app.use(cors())` is in `server.js` and restart the backend |
| `Cannot find module 'express'` | Run `npm install` inside the `backend` folder |
| Port already in use | Stop the other process or change the port number in `server.js` |

## Future Improvements

- Connect a database (MongoDB) and add CRUD endpoints
- Add user authentication
- Build a fuller user interface with routing
- Deploy the app (for example Render for the backend and Vercel for the frontend)

## Author

**Monisha Sundaram**
GitHub: [@monishasundaram](https://github.com/monishasundaram)

Built as part of the Full Stack Developer Fresher internship, Task 1: Fundamentals and Setup.
