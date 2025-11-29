<img width="825" height="809" alt="Register User Example" src="https://github.com/user-attachments/assets/ac845aed-fe09-4da7-b18f-aaa79fe1696b" /># NestJS Backend Assignment

## Features

- User CRUD API with PostgreSQL & TypeORM
- JWT-based authentication & authorization
- Input validation, meaningful error handling
- Automated unit tests with Jest
- Well-organized, documented codebase

---

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL running (database named `nestdb`)

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

---

### Run the App

```bash
npm run start:dev
```
_App will be available on http://localhost:3000_

---

## API Endpoints

### Register User
- **POST** `/users`
- **Body:**
  ```json
  { "username": "demo123", "password": "password123" }
  ```

### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  { "username": "demo123", "password": "password123" }
  ```
- **Response:**  
  `{ "access_token": "..." }`

### List Users (Protected)
- **GET** `/users`
- **Authorization:** Bearer token required

### Other endpoints:
- **GET** `/users/:id`
- **PATCH** `/users/:id`
- **DELETE** `/users/:id`

---

## Example Postman Requests & Responses

- **Register:**
    ![Register User Example](https://drive.google.com/file/d/1RagK4kD5Xi-gWtxRpJS2nqwkVZ1l0Yc7/view?usp=sharin)
- **Login and JWT:**
    ![Login Example](https://drive.google.com/file/d/1hVz4rODGUZpVb2eFm8dIsjJjO_Go4v7w/view?usp=sharing )
- **List Users:**
    ![Get Users Example]( https://drive.google.com/file/d/10osBDyniTIup4qr5XNN2yxtW2plfpRy1/view?usp=sharing)
- **Update User:**
    ![Update User Example](https://drive.google.com/file/d/1Stwjwux96yGBpW1hvI8m2-IjkL4knkGD/view?usp=sharing)
- **Delete User:**
    ![Delete User Example](https://drive.google.com/file/d/1OjXF2HJTbJ_eLd9U4cSCNOe9aYLtee0-/view?usp=sharing)
- **Validation Error:**
    ![Validation Error Example]( https://drive.google.com/file/d/1BOMI-45MGiOKxfR6etHSkECyK7OzXD1b/view?usp=sharing)
- **Unauthorized Error:**
    ![Unauthorized Example]( https://drive.google.com/file/d/1vutQmKCTHQphAqcHztHv-M_2JMwlqUdJ/view?usp=sharing)
- **Unit Test Passing:**
    ![Unit Test Example]( https://drive.google.com/file/d/10EArWr49LPCKXlfKKtO26Pe2G15Jalrs/view?usp=sharing)

> 👉 **Full Test/Output Record:**  
> For a detailed demo with all outputs (screenshots/video), see: [Assignment Proof Outputs](https://drive.google.com/file/d/1BbRWADxY9RF2IveNskdH1Vmg8r-V07DP/view?usp=sharing)  
> _Or, upload your compiled screenshots/video to a cloud drive, then place the **shared link here** for your mentor to review._

---

## Authentication (How it works)

- After registering, log in via `/auth/login` to receive a JWT.
- For all protected routes (like `/users`), add this JWT as a Bearer Token, e.g.,
  ```
  Authorization: Bearer <access_token>
  ```
- If a request is made to a protected route **without** a valid token, you’ll receive a 401 Unauthorized error.

---

## Running Unit Tests

```bash
npm run test
```
- All basic and additional tests should pass, showing your API functions are verified.

---

## Project Structure

```
src/
  app.module.ts
  auth/
    auth.controller.ts
    auth.module.ts
    auth.service.ts
    jwt-auth.guard.ts
    jwt.strategy.ts
  users/
    dto/
    user.entity.ts
    users.controller.ts
    users.module.ts
    users.service.ts
    users.service.spec.ts
  main.ts
test/
  users.service.spec.ts
.env
package.json
README.md
tsconfig.json
```

---

## Code Documentation & Comments

- **DTOs/classes** use decorators like `@IsString()` and `@IsNotEmpty()` for validation and clarity.
- **All major functions and classes** are documented with JSDoc comments.  
  Example:
  ```typescript
  /**
   * Validates a user based on JWT payload.
   * @param payload The decoded JWT payload.
   */
  async validate(payload: any) { ... }
  ```
- **Inline comments** are provided for complex logic.  
  _See source files for code-level documentation._

---

## Author

Bellamkonda Nokesh

---

## **Contact / Proofs**

- [GitHub Repo](https://github.com/Bellamkonda-Nokesh/nest-backend-assignment)
- [Assignment Proof Outputs (screenshots/video)](https://drive.google.com/file/d/1BbRWADxY9RF2IveNskdH1Vmg8r-V07DP/view?usp=sharing)  

---

**_Thank you for reviewing!_**
