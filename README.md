# Task Tracker App

## Project Structure

- `frontend/`: React app
- `backend/`: Node.js (Express) API

## Local Development with Docker Compose

1. Copy `.env.example` to `.env` in both `frontend` and `backend` folders and adjust as needed.
2. Build and start the services:

   ```powershell
   docker compose up --build
   ```

- Frontend: <http://localhost:3000>
- Backend API: <http://localhost:5000>

## Next Steps

- CI/CD pipeline with GitHub Actions
- AWS deployment
- (Bonus) Monitoring with Grafana/Prometheus
