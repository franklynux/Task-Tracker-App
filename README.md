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
[![CI Pipeline](https://github.com/franklynux/Task-Tracker-App/actions/workflows/ci.yml/badge.svg?event=deployment)](https://github.com/franklynux/Task-Tracker-App/actions/workflows/ci.yml)
- AWS deployment
- (Bonus) Monitoring with Grafana/Prometheus

### Monitoring Setup

1. **Start the Monitoring Stack**:

   Run the following command to start Prometheus and Grafana:

   ```bash
   docker-compose -f docker-compose.monitoring.yml up -d
   ```

2. **Access Prometheus**:

   - URL: [http://localhost:9090](http://localhost:9090)

3. **Access Grafana**:

   - URL: [http://localhost:3001](http://localhost:3001)
   - Default credentials:
     - Username: `admin`
     - Password: `admin`

4. **Grafana Configuration**:

   - Prometheus is pre-configured as a data source.
   - A sample dashboard for backend metrics is available under the title "Backend Metrics".
