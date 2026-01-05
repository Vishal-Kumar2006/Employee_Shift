# 📄 Employee Shift Board

**Assignment Name:** Employee Shift Board **Role:** Full Stack Developer
**Goal:** Employee Shift Board — Mini HR Utility

A practical full-stack application to manage employee shifts with
authentication, role-based access control, and strict business rules. This
project focuses on real-world logic, backend validation, and clean architecture
rather than UI gimmicks.

---

## 🎯 Objective

Build a minimal yet robust full-stack system that allows:

- Secure authentication using JWT
- Admin-controlled shift management
- Normal users to view only their own shifts
- Enforcement of real business constraints such as shift overlap prevention and
  minimum working hours

---

## 🔧 Core Features

### 1. Authentication & Authorization

- JWT-based login system
- Role-based access control (Admin / Normal User)
- Protected routes on both frontend and backend
- Pre-seeded users for evaluation

### 2. Employee Shift Board

#### Employee Fields

- Name
- Employee Code
- Department

#### Shift Fields

- Date
- Start Time
- End Time

---

## ❗ Mandatory Business Rules

These rules are enforced strictly at the backend level:

1. **No Overlapping Shifts** An employee cannot be assigned multiple shifts that
   overlap on the same date.

2. **Minimum Shift Duration** Each shift must be at least **4 hours long**.

3. **Role-Based Data Access**

   - Normal users can only view their own shifts
   - Admin users can view and manage all employee shifts

---

## 🖥 Backend Details

### Technology Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication

### REST API Endpoints

| Method | Endpoint                      | Description                      | Access       |
| ------ | ----------------------------- | -------------------------------- | ------------ |
| POST   | `/login`                      | Authenticate user and return JWT | Public       |
| GET    | `/employees`                  | Fetch all employees              | Admin        |
| POST   | `/shifts`                     | Create a new shift               | Admin        |
| GET    | `/shifts?employee=xx&date=xx` | Fetch shifts (filtered)          | Admin / User |
| DELETE | `/shift/:id`                  | Delete a shift                   | Admin        |

### Backend Architecture

```
backend/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── models/
 ├── middleware/
 ├── validations/
 └── utils/
```

### Backend Highlights

- Centralized error handling
- Request payload validation
- Secure JWT verification
- Role-based middleware enforcement
- Clean separation of concerns

---

## 💻 Frontend Details

### Technology Stack

- React (Vite)
- Axios
- React Router DOM

### Screens & Components

- Login Page
- Dashboard
- Shift Assignment Form (Admin only)
- Shifts Table View

### UI Considerations

- API error messages displayed clearly
- Responsive layout
- Minimal and functional design

---

## 🔑 Demo Login Credentials (Seeded)

The following user is hard-coded in the seed data and available in the deployed
version for reviewers:

```
Email: hire-me@anshumat.org
Password: HireMe@2025!
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd employee-shift-board
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📮 Postman Collection

A Postman collection is included in the repository to test all APIs,
authentication, and role-based access.

---

## 🧪 Evaluation Focus Areas

- Correct enforcement of business rules
- Clean and maintainable code
- Edge case handling (overlaps, invalid times, unauthorized access)
- API correctness and validation
- Database schema design
- Role-based access control implementation

---

## ⚠️ Known Limitations / Assumptions

- No user self-registration (users are seeded)
- Shifts are assumed to be within a single calendar day
- UI intentionally kept simple to emphasize logic and correctness

---

## 🏁 Submission Format

Submit the following details in the assignment form:

```
Name:
GitHub Repo:
Live Demo Link:
Tech Stack Used:
Notes for Reviewer (optional):
```

---

✅ **This project strictly follows the assignment specifications and business
rules.**
