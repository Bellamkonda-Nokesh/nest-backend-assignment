# NestJS Backend Assignment

## Features

- User CRUD API with PostgreSQL & TypeORM
- JWT-based authentication & authorization
- Input validation, meaningful error handling
- Automated unit tests with Jest
- Well-organized, documented codebase

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL running (`nestdb` database)

### Install

```bash
git clone https://github.com/Bellamkonda-Nokesh/nest-backend-assignment.git
cd nest-backend-assignment
npm install
```

### Configure Environment

Copy `.env.example` to `.env` and fill in your DB credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=nestdb
JWT_SECRET=changeme
```

### Run the App

```bash
npm run start:dev
```
_App will be available on http://localhost:3000_

### API Endpoints

#### Register User
`POST /users`
```json
{ "username": "demo123", "password": "password123" }
```

#### Login
`POST /auth/login`
```json
{ "username": "demo123", "password": "password123" }
```
_Response:_ `{ "access_token": "..." }`

#### List Users (Protected)
`GET /users`

- Add Bearer token to Authorization header

#### Other endpoints:
- `GET /users/:id`
- `PATCH /users/:id`
- `DELETE /users/:id`

### Run Tests

```bash
npm run test
```

## Project Structure

```
src/
  app.module.ts
  users/
    users.controller.ts
    users.service.ts
    users.module.ts
    user.entity.ts
    users.service.spec.ts
  auth/
    auth.service.ts
    auth.controller.ts
    jwt.strategy.ts
    auth.module.ts
```

## Author

Bellamkonda Nokesh