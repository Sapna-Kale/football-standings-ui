# 🖥️ Football Standings UI

This is the Angular frontend for the Football Standings App.  
It allows users to view countries, leagues, and team standings with JWT-based authentication.

---

## Tech Stack

- **Framework:** Angular 17
- **Language:** TypeScript
- **Auth:** JWT (via login API)
- **UI Communication:** Angular HTTPClient + Interceptors
- **Deployment:** Dockerized

---

## Prerequisites

- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)
- Docker Desktop (for Dockerized run)

---

## Steps to Run Locally

```bash
cd football-standings-ui
npm install
ng serve

```
## Steps to run with Docker

```bash
docker build -t football-standings-ui:v1.0.0 .
docker run -p 4200:80 --name football-standings-ui football-standings-ui:v1.0.0

```
