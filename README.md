# DevOps Task Manager

A production-ready full-stack Task Manager application built with **React**, **Vite**, **ASP.NET Core Web API**, and **SQLite**, designed to demonstrate modern DevOps practices including Docker containerization and GitHub Actions CI/CD.

---

## 🚀 Features

- **Task Management**: Create, view, mark as complete/pending, and delete tasks.
- **Real-time Statistics**: Live dashboard cards for Total, Completed, and Pending tasks.
- **Input Validation**: Backend and frontend validation for required title and non-empty inputs.
- **RESTful API**: ASP.NET Core API with proper HTTP status codes (`200`, `201`, `204`, `400`, `404`).
- **Persistent Data**: SQLite database with Docker persistent volume storage.
- **Health Monitoring**: Dedicated health check endpoint at `/api/health`.

---

## 🏗️ Architecture

```text
Browser / Client
      │
      ▼
Frontend Container (Nginx / React SPA)  ── Port 3000
      │ (REST API)
      ▼
Backend Container (ASP.NET Core Web API) ── Port 5000
      │
      ▼
SQLite Persistent Volume (/data/tasks.db)
```

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, JavaScript, CSS (Vanilla Design Tokens)
- **Backend**: ASP.NET Core 8 Web API, C#
- **Database**: SQLite with Entity Framework Core 8
- **DevOps & Infrastructure**: Docker, Docker Compose, Nginx, Git, GitHub Actions

---

## 📁 Project Structure

```text
devops-task-manager/
├── frontend/
│   ├── src/
│   │   ├── components/   # Header, Statistics, TaskForm, TaskItem, TaskList
│   │   ├── services/     # api.js helper service
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── nginx.conf
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── Controllers/      # TasksController, HealthController
│   ├── Data/             # AppDbContext.cs
│   ├── DTOs/             # TaskDtos.cs
│   ├── Models/           # TaskItem.cs
│   ├── Program.cs
│   ├── appsettings.json
│   └── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml        # CI Pipeline for Frontend & Backend
├── docker-compose.yml
├── .gitignore
├── .env.example
└── README.md
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18+)
- .NET 8 SDK
- Git

### 1. Run Backend locally
```bash
cd backend
dotnet restore
dotnet run
```
Backend will run at `http://localhost:5000`.

### 2. Run Frontend locally
```bash
cd frontend
npm install
npm run dev
```
Frontend will run at `http://localhost:5173`.

---

## 🐳 Docker Deployment

To build and launch the entire application with Docker Compose:

```bash
# Build and run containers in detached mode
docker compose up -d --build

# Check running containers
docker compose ps

# View logs
docker compose logs -f

# Stop containers
docker compose down
```

Access:
- **Frontend**: http://localhost:3000
- **Backend Health**: http://localhost:5000/api/health
- **Backend API**: http://localhost:5000/api/tasks

---

## ⚙️ Environment Variables

Copy `.env.example` to create local environment overrides:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Frontend API backend endpoint | `http://localhost:5000` |
| `ASPNETCORE_ENVIRONMENT` | Backend environment | `Production` |
| `ConnectionStrings__DefaultConnection` | SQLite Connection String | `Data Source=/data/tasks.db` |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check endpoint |
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/{id}` | Get task by ID |
| `POST` | `/api/tasks` | Create a task |
| `PUT` | `/api/tasks/{id}` | Update title, description, or status |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

---

## 🤖 GitHub Actions CI/CD

The repository includes a GitHub Actions pipeline (`.github/workflows/ci.yml`) that triggers on push and pull requests to `main`:
1. **Backend Job**: Sets up .NET 8, restores packages, and compiles the ASP.NET Core project.
2. **Frontend Job**: Sets up Node 22, installs npm dependencies, and runs `npm run build`.

---

## 🌐 Live Server Deployment Guide

To deploy to a Linux VPS (e.g. AWS EC2, DigitalOcean, Hetzner):
1. SSH into your VPS with Docker & Docker Compose installed.
2. Clone this repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd devops-task-manager
   ```
3. Run with Docker Compose:
   ```bash
   docker compose up -d --build
   ```
