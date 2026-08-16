# 🚀 DevOps Task Manager

A production-ready, containerized full-stack Task Management application built with **React (Vite)**, **ASP.NET Core 8 Web API**, **SQLite**, and **Docker**.

This project demonstrates modern DevOps lifecycle practices, including Docker containerization, cloud deployment, environment separation, and GitHub Actions CI/CD pipelines.

---

![Banner](https://drive.google.com/file/d/1ChKtMJZmIDb-lMo-m_hPsUe4nM1uTXFl/view?usp=sharing)

## 🌐 Live Demo

[![Live App Banner](https://img.shields.io/badge/Live%20Demo-Render-brightgreen?style=for-the-badge&logo=render)](https://taskmanagement-kbvy.onrender.com)

🔗 **Live Application URL:** [https://taskmanagement-kbvy.onrender.com](https://taskmanagement-kbvy.onrender.com)

---

## 📸 Screenshots

# <!--

🖼️ IMAGE INSERTION INSTRUCTIONS:
Replace the placeholder image URLs below with your actual screenshots.

1. Put your image files in a folder named `docs/` inside your project root.
2. # Link them like `![Dashboard](./docs/dashboard.png)`.
   -->

### 🖥️ Application Dashboard

![DevOps Task Manager Dashboard](https://via.placeholder.com/1200x600/1e293b/6366f1?text=Insert+Dashboard+Screenshot+Here)  
_Figure 1: Task Manager Dashboard showing real-time task stats, creation form, and interactive task cards._

<br/>

### 🐳 Docker & Cloud Deployment

![Render Cloud Deployment](https://via.placeholder.com/1200x500/0f172a/38bdf8?text=Insert+Render+Deployment+Screenshot+Here)  
_Figure 2: Live Render Web Services hosting containerized ASP.NET Core API and Nginx Frontend._

---

## ✨ Features

- **Task Lifecycle Management**: Create, edit, complete/undo, and delete tasks.
- **Real-Time Dashboard Analytics**: Live stat counters tracking total, completed, and pending tasks.
- **Input Validation**: Client-side and server-side validation for required titles and non-empty inputs.
- **RESTful API**: ASP.NET Core 8 Web API following REST standards with HTTP status codes (`200`, `201`, `204`, `400`, `404`).
- **Persistent Storage**: SQLite database with automated EF Core migration and Docker persistent volume support.
- **Health Checks**: Endpoint at `/api/health` for uptime monitoring and container orchestration health checks.
- **Production Containerization**: Multi-stage Docker builds for minimal container sizes and fast startup times.

---

## 🏗️ System Architecture

```text
               ┌─────────────────────────────────────────┐
               │           User Web Browser              │
               └────────────────────┬────────────────────┘
                                    │ (HTTP / REST API)
                                    ▼
               ┌─────────────────────────────────────────┐
               │    Frontend Container (Nginx / SPA)     │
               │               Port 80 / 3000            │
               └────────────────────┬────────────────────┘
                                    │ (CORS / HTTP Requests)
                                    ▼
               ┌─────────────────────────────────────────┐
               │  Backend Container (ASP.NET Core 8 API)  │
               │               Port 5000                 │
               └────────────────────┬────────────────────┘
                                    │ (EF Core 8)
                                    ▼
               ┌─────────────────────────────────────────┐
               │    SQLite Persistent Storage Volume     │
               │               (/data/tasks.db)          │
               └─────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer                | Technology              | Details                                                 |
| -------------------- | ----------------------- | ------------------------------------------------------- |
| **Frontend**         | React 18, Vite          | JavaScript, Vanilla Design Tokens, Responsive UX        |
| **Backend**          | ASP.NET Core 8          | C#, Web API Controllers, Entity Framework Core 8        |
| **Database**         | SQLite                  | Automatic database creation and EF Core migrations      |
| **Server / Proxy**   | Nginx                   | High-performance web server serving React static assets |
| **Containerization** | Docker & Docker Compose | Multi-stage Dockerfiles for optimized production builds |
| **Cloud Hosting**    | Render                  | Free Web Services for containerized full-stack hosting  |
| **CI/CD**            | GitHub Actions          | Automated build & compile checks on every push          |

---

## 📁 Directory Structure

```text
devops-task-manager/
├── frontend/
│   ├── src/
│   │   ├── components/   # Header, Statistics, TaskForm, TaskItem, TaskList
│   │   ├── services/     # api.js REST API client service
│   │   ├── App.jsx       # Main App component
│   │   ├── main.jsx      # React DOM entrypoint
│   │   └── index.css     # Design tokens and custom CSS styling
│   ├── public/           # Static public assets
│   ├── nginx.conf        # Nginx configuration for SPA routing
│   ├── Dockerfile        # Multi-stage Node + Nginx Dockerfile
│   ├── package.json      # Dependencies and scripts
│   └── vite.config.js    # Vite build configuration
├── backend/
│   ├── Controllers/      # TasksController, HealthController
│   ├── Data/             # AppDbContext.cs (EF Core DB Context)
│   ├── DTOs/             # TaskDtos.cs (Request/Response Transfer Objects)
│   ├── Models/           # TaskItem.cs (Domain Model)
│   ├── Program.cs        # Middleware & service setup
│   ├── appsettings.json  # Configuration file
│   └── Dockerfile        # Multi-stage .NET 8 Dockerfile
├── .github/
│   └── workflows/        # GitHub Actions CI workflow
├── docker-compose.yml    # Full-stack local multi-container orchestration
├── render.yaml           # Render Cloud Blueprint deployment spec
├── .env.example          # Environment variables template
└── README.md             # Project documentation
```

---

## 💻 Local Development Setup

### Prerequisites

- [Node.js (v18+)](https://nodejs.org/)
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) _(Optional for container run)_

### 1. Manual Local Execution

#### Backend Setup

```bash
cd backend
dotnet restore
dotnet run
```

_Backend API will run locally at `http://localhost:5080` (or `http://localhost:5000`)._

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

_Frontend React App will run locally at `http://localhost:5173`._

---

### 2. Running with Docker Compose (Recommended)

To launch both frontend and backend in isolated Docker containers with a single command:

```bash
# Build and run containers in background
docker compose up -d --build

# View container logs
docker compose logs -f

# Stop containers
docker compose down
```

Access points:

- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000/api/tasks`
- **Health Check**: `http://localhost:5000/api/health`

---

## ☁️ Cloud Deployment Guide (Render Free Tier)

This application is configured for seamless deployment on **Render**:

1. **Deploy Backend (Docker Web Service)**:
   - Create a Web Service on Render from your GitHub repo.
   - Set **Root Directory** to `backend`.
   - Set **Runtime** to `Docker`.
   - Set **Instance Type** to `Free`.
   - Copy the deployed live backend URL (e.g. `https://devops-task-manager-api.onrender.com`).

2. **Deploy Frontend (Docker Web Service)**:
   - Create a second Web Service on Render from the same GitHub repo.
   - Set **Root Directory** to `frontend`.
   - Set **Runtime** to `Docker`.
   - Set Environment Variable: `VITE_API_URL` = `https://<your-backend-url>.onrender.com`.
   - Select `Free` instance and deploy!

---

## 📡 REST API Documentation

| Method   | Endpoint          | Description                  | Sample Request / Response                               |
| -------- | ----------------- | ---------------------------- | ------------------------------------------------------- |
| `GET`    | `/api/health`     | Service health status        | `{"status": "healthy"}`                                 |
| `GET`    | `/api/tasks`      | Get all tasks                | `[{"id": 1, "title": "Buy groceries", ...}]`            |
| `GET`    | `/api/tasks/{id}` | Get task by ID               | `{"id": 1, "title": "Buy groceries"}`                   |
| `POST`   | `/api/tasks`      | Create a new task            | Body: `{"title": "New Task", "description": "Details"}` |
| `PUT`    | `/api/tasks/{id}` | Update task details / status | Body: `{"title": "Updated", "isCompleted": true}`       |
| `DELETE` | `/api/tasks/{id}` | Delete task by ID            | Returns `204 No Content`                                |

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).
