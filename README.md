# 🚀 Career Connect — Full Stack Job Portal

**Career Connect** is a full-stack Job Portal web application designed to connect **Job Seekers, Recruiters, Companies, and Administrators** through a centralized platform.

The application provides complete job-search, recruitment, application-management, profile-management, resume-management, and administration functionality.

The project follows a layered architecture using **React.js + Vite** for the frontend and **Spring Boot + Spring Security + JWT + MySQL** for the backend.

---

# 📌 Project Overview

Career Connect provides different functionalities based on the user's role.

### 👨‍💻 Job Seeker

Job seekers can:

* Register an account
* Login securely
* Manage their profile
* Upload resumes
* Search for jobs
* View job details
* Save jobs
* Apply for jobs
* View submitted applications
* Track application status
* Access their dashboard

### 🏢 Recruiter

Recruiters can:

* Register as recruiters
* Manage recruiter profiles
* Manage company information
* Create job postings
* Edit job postings
* Delete job postings
* View their jobs
* View applicants
* Manage applications
* Access recruiter dashboard
* View recruitment analytics

### 👑 Administrator

Administrators can:

* Login through the admin portal
* Access the admin dashboard
* Manage users
* Manage companies
* Manage jobs
* Monitor the platform
* Manage platform data

---

# ✨ Main Features

## 🔐 Authentication & Authorization

* User Registration
* User Login
* Recruiter Registration
* Admin Login
* JWT Authentication
* Spring Security
* Role-Based Authorization
* Protected Routes
* Role-Based Frontend Routes
* Password Change
* Secure API Access

Supported roles include:

```text
USER
RECRUITER
ADMIN
```

---

# 👤 Job Seeker Module

The Job Seeker module allows users to manage their complete job-search process.

### Features

* Job Seeker Registration
* Login
* User Dashboard
* Profile Management
* Resume Upload
* Job Search
* Job Listing
* Job Details
* Job Application
* My Applications
* Application Tracking
* Save Jobs
* Saved Jobs
* Personal Profile

### Job Seeker Flow

```text
                    ┌──────────────────┐
                    │   Job Seeker     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Register      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Login       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Dashboard     │
                    └────────┬─────────┘
                             │
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
       ┌──────────┐    ┌────────────┐   ┌────────────┐
       │ Profile  │    │ Search Job │   │   Resume   │
       └──────────┘    └─────┬──────┘   └────────────┘
                             │
                             ▼
                       ┌─────────────┐
                       │ Job Details │
                       └──────┬──────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
              ┌──────────┐        ┌──────────┐
              │ Save Job │        │ Apply Job│
              └──────────┘        └────┬─────┘
                                       │
                                       ▼
                                ┌──────────────┐
                                │ My Application│
                                └──────────────┘
```

---

# 🏢 Recruiter Module

Recruiters can manage companies, jobs, and applicants.

### Features

* Recruiter Registration
* Recruiter Login
* Recruiter Profile
* Recruiter Dashboard
* Company Management
* Add Company
* Company List
* Add Job
* Edit Job
* Manage Jobs
* Delete Jobs
* View Applicants
* Application Management
* Recruiter Analytics

### Recruiter Flow

```text
                    ┌──────────────────┐
                    │    Recruiter     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Register      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Login       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │Recruiter Dashboard│
                    └────────┬─────────┘
                             │
                 ┌───────────┼──────────────┐
                 │           │              │
                 ▼           ▼              ▼
           ┌──────────┐ ┌──────────┐ ┌────────────┐
           │ Company  │ │   Jobs   │ │  Profile   │
           │Management│ │Management│ │ Management │
           └──────────┘ └────┬─────┘ └────────────┘
                             │
                             ▼
                       ┌─────────────┐
                       │  Applicants │
                       └──────┬──────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │Applications     │
                     │Management       │
                     └─────────────────┘
```

---

# 👑 Admin Module

The Admin module provides centralized control over the application.

### Features

* Admin Login
* Admin Dashboard
* Manage Users
* Manage Companies
* Manage Jobs
* Admin Profile
* Platform Management
* Dashboard Statistics

### Admin Flow

```text
                       ┌─────────────┐
                       │    Admin    │
                       └──────┬──────┘
                              │
                              ▼
                       ┌─────────────┐
                       │ Admin Login │
                       └──────┬──────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Admin Dashboard  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌───────────┐  ┌───────────┐  ┌───────────┐
        │   Users   │  │ Companies │  │   Jobs    │
        │ Management│  │ Management│  │ Management│
        └───────────┘  └───────────┘  └───────────┘
```

---

# 🏢 Company Management

Recruiters can manage company information.

### Features

* Add Company
* View Company List
* Company Information
* Associate Jobs with Companies
* Admin Company Management

---

# 💼 Job Management

The application provides complete job management.

### Features

* Add Job
* View Jobs
* Job Search
* Job Details
* Edit Job
* Delete Job
* Manage Jobs
* Save Jobs
* Apply for Jobs
* Admin Job Management

### Job Flow

```text
                    ┌──────────────┐
                    │   Recruiter  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Add Job    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  Job Listing │
                    └──────┬───────┘
                           │
                 ┌─────────┴─────────┐
                 │                   │
                 ▼                   ▼
           ┌────────────┐      ┌────────────┐
           │ Job Seeker │      │   Admin    │
           └─────┬──────┘      └────────────┘
                 │
                 ▼
           ┌────────────┐
           │ Job Details│
           └─────┬──────┘
                 │
          ┌──────┴───────┐
          │              │
          ▼              ▼
     ┌─────────┐    ┌─────────┐
     │ Save Job│    │ Apply   │
     └─────────┘    └────┬────┘
                          │
                          ▼
                   ┌─────────────┐
                   │ Application │
                   └─────────────┘
```

---

# 📝 Application Management

Job seekers can apply for jobs and recruiters can manage applications.

### Application Flow

```text
┌─────────────┐
│  Job Seeker │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│ Select Job   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Apply for Job│
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Application Saved│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│     Recruiter    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ View Applicants  │
└────────┬─────────┘
         │
         ▼
┌────────────────────┐
│ Application Status  │
└────────────────────┘
```

---

# 📄 Resume Management

The application provides resume upload functionality.

### Resume Flow

```text
Job Seeker
    │
    ▼
Profile
    │
    ▼
Upload Resume
    │
    ▼
Spring Boot Backend
    │
    ▼
Resume Storage
    │
    ▼
Resume Available for Application
```

The backend contains a dedicated `ResumeService` and `ResumeController` for resume management.

---

# 🔖 Saved Jobs

Job seekers can save interesting jobs and access them later.

```text
Job List
   │
   ▼
Job Details
   │
   ▼
Save Job
   │
   ▼
Saved Jobs
   │
   ▼
View Later
```

---

# 📊 Dashboards

The application provides separate dashboards based on user roles.

### Job Seeker Dashboard

```text
┌────────────────────────────┐
│     Job Seeker Dashboard   │
├────────────────────────────┤
│ Profile                    │
│ Applications               │
│ Saved Jobs                 │
│ Resume                     │
│ Job Search                 │
└────────────────────────────┘
```

### Recruiter Dashboard

```text
┌────────────────────────────┐
│     Recruiter Dashboard    │
├────────────────────────────┤
│ Companies                  │
│ Jobs                       │
│ Applicants                 │
│ Applications               │
│ Recruitment Analytics      │
└────────────────────────────┘
```

### Admin Dashboard

```text
┌────────────────────────────┐
│       Admin Dashboard      │
├────────────────────────────┤
│ Users                      │
│ Companies                  │
│ Jobs                       │
│ Platform Statistics        │
└────────────────────────────┘
```

---

# 📈 Recruiter Analytics

The frontend contains a recruiter chart component:

```text
src/components/charts/RecruiterChart.jsx
```

This provides graphical representation of recruiter-related information.

---

# 🏗️ Complete System Architecture

```text
                         ┌─────────────────────────┐
                         │       END USERS         │
                         └────────────┬────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
             ┌────────────┐    ┌────────────┐    ┌────────────┐
             │ Job Seeker │    │ Recruiter  │    │   Admin    │
             └─────┬──────┘    └─────┬──────┘    └─────┬──────┘
                   │                 │                 │
                   └─────────────────┼─────────────────┘
                                     │
                                     ▼
                    ╔════════════════════════════╗
                    ║       REACT FRONTEND       ║
                    ╠════════════════════════════╣
                    ║ Pages                      ║
                    ║ Components                 ║
                    ║ Layouts                    ║
                    ║ AuthContext                ║
                    ║ PrivateRoute               ║
                    ║ RoleRoute                  ║
                    ║ API / Axios                ║
                    ║ Services                   ║
                    ╚══════════════╤═════════════╝
                                   │
                                   │ REST API / HTTP
                                   ▼
                    ╔════════════════════════════╗
                    ║      SPRING BOOT API       ║
                    ╠════════════════════════════╣
                    ║ Controllers                ║
                    ║ DTOs                       ║
                    ║ Services                   ║
                    ║ Service Implementations    ║
                    ║ Security                   ║
                    ║ Exception Handling         ║
                    ║ Repositories               ║
                    ║ Entities                   ║
                    ╚══════════════╤═════════════╝
                                   │
                   ┌───────────────┼────────────────┐
                   │               │                │
                   ▼               ▼                ▼
            ┌────────────┐   ┌────────────┐   ┌────────────┐
            │   MySQL    │   │   Resume   │   │   Email    │
            │  Database  │   │   Storage  │   │  Service   │
            └────────────┘   └────────────┘   └────────────┘
```

---

# 🔐 Security Architecture

The backend uses Spring Security and JWT authentication.

```text
                     User Login
                         │
                         ▼
                 ┌───────────────┐
                 │ AuthController│
                 └───────┬───────┘
                         │
                         ▼
                   ┌───────────┐
                   │ AuthService│
                   └─────┬─────┘
                         │
                         ▼
                   ┌───────────┐
                   │ JwtService │
                   └─────┬─────┘
                         │
                         ▼
                    JWT Token
                         │
                         ▼
                Frontend AuthContext
                         │
                         ▼
                  API Request
                         │
                         ▼
              JwtAuthenticationFilter
                         │
                         ▼
                Spring Security
                         │
               ┌─────────┴─────────┐
               │                   │
               ▼                   ▼
          Authorized           Unauthorized
               │                   │
               ▼                   ▼
        Controller/API          401/403
```

---

# 🧩 Backend Architecture

The backend follows a layered Spring Boot architecture.

```text
backend
│
└── src/main/java/com/onkar/jobportal
    │
    ├── config
    │   └── SecurityConfig
    │
    ├── controller
    │   ├── AdminController
    │   ├── ApplicationController
    │   ├── AuthController
    │   ├── CompanyController
    │   ├── DashboardController
    │   ├── JobController
    │   ├── ProfileController
    │   ├── RecruiterController
    │   ├── ResumeController
    │   └── SavedJobController
    │
    ├── dto
    │   ├── AdminDashboardResponse
    │   ├── ApiResponse
    │   ├── ApplicationRequest
    │   ├── ChangePasswordRequest
    │   ├── CompanyRequest
    │   ├── DashboardResponse
    │   ├── ExceptionResponse
    │   ├── JobRequest
    │   ├── LoginRequest
    │   ├── ProfileResponse
    │   ├── RecruiterDashboardResponse
    │   ├── RecruiterRegisterRequest
    │   ├── RegisterRequest
    │   ├── SavedJobRequest
    │   ├── SaveJobRequest
    │   └── UpdateProfileRequest
    │
    ├── entity
    │   ├── Application
    │   ├── ApplicationStatus
    │   ├── Company
    │   ├── Job
    │   ├── JobApplication
    │   ├── Role
    │   ├── SavedJob
    │   └── User
    │
    ├── exception
    │   ├── GlobalExceptionHandler
    │   └── ResourceNotFoundException
    │
    ├── repository
    │   ├── ApplicationRepository
    │   ├── CompanyRepository
    │   ├── JobRepository
    │   ├── SavedJobRepository
    │   └── UserRepository
    │
    ├── security
    │   ├── CustomUserDetailsService
    │   ├── CustomUserService
    │   ├── JwtAuthenticationFilter
    │   └── JwtService
    │
    ├── service
    │   ├── AdminService
    │   ├── ApplicationService
    │   ├── AuthService
    │   ├── CompanyService
    │   ├── DashboardService
    │   ├── EmailService
    │   ├── JobService
    │   ├── ProfileService
    │   ├── RecruiterService
    │   ├── ResumeService
    │   ├── SavedJobService
    │   │
    │   └── impl
    │       ├── AdminServiceImpl
    │       ├── ApplicationServiceImpl
    │       ├── AuthServiceImpl
    │       ├── CompanyServiceImpl
    │       ├── DashboardServiceImpl
    │       ├── EmailServiceImpl
    │       ├── JobServiceImpl
    │       ├── ProfileServiceImpl
    │       ├── RecruiterServiceImpl
    │       ├── ResumeServiceImpl
    │       └── SavedJobServiceImpl
    │
    └── JobportalApplication.java
```

---

# 🎨 Frontend Architecture

The frontend is built using React and Vite.

```text
frontend
│
├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   │
│   ├── api
│   │   └── axios.js
│   │
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components
│   │   ├── charts
│   │   │   └── RecruiterChart.jsx
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── RoleRoute.jsx
│   │
│   ├── context
│   │   └── AuthContext.jsx
│   │
│   ├── layouts
│   │   └── MainLayout.jsx
│   │
│   ├── pages
│   │   │
│   │   ├── admin
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageCompanies.jsx
│   │   │   ├── ManageJobs.jsx
│   │   │   └── ManageUsers.jsx
│   │   │
│   │   ├── application
│   │   │   ├── Application.jsx
│   │   │   └── MyApplications.jsx
│   │   │
│   │   ├── auth
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── RecruiterRegister.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── company
│   │   │   ├── AddCompany.jsx
│   │   │   └── CompanyList.jsx
│   │   │
│   │   ├── dashboard
│   │   │   ├── RecrcuiterDashboard.jsx
│   │   │   └── UserDashboard.jsx
│   │   │
│   │   ├── jobs
│   │   │   ├── AddJob.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   ├── JobList.jsx
│   │   │   ├── Jobs.jsx
│   │   │   └── SavedJobs.jsx
│   │   │
│   │   ├── jobseeker
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── profile
│   │   │   ├── AdminProfile.jsx
│   │   │   ├── JobSeekerProfile.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── RecruiterProfile.jsx
│   │   │
│   │   ├── recruiter
│   │   │   ├── AddJob.jsx
│   │   │   ├── Applicants.jsx
│   │   │   ├── EditJob.jsx
│   │   │   ├── ManageJobs.jsx
│   │   │   ├── RecruiterDashboard.jsx
│   │   │   └── RecruiterProfile.jsx
│   │   │
│   │   ├── Home.jsx
│   │   └── Unauthorized.jsx
│   │
│   ├── services
│   │   ├── adminService.js
│   │   ├── applicationService.js
│   │   ├── authService.js
│   │   ├── companyService.js
│   │   ├── jobService.js
│   │   ├── profileService.js
│   │   ├── recruiterService.js
│   │   ├── resumeService.js
│   │   └── savedJobService.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

---

# 🔄 Complete Application Data Flow

The complete system works as follows:

```text
                       USER
                        │
                        ▼
                ┌──────────────┐
                │ React/Vite   │
                │  Frontend    │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │ React Router │
                └──────┬───────┘
                       │
              ┌────────┴─────────┐
              │                  │
              ▼                  ▼
        PrivateRoute         RoleRoute
              │                  │
              └────────┬─────────┘
                       │
                       ▼
                ┌──────────────┐
                │ AuthContext  │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │ Axios / API  │
                └──────┬───────┘
                       │
                  HTTP / REST
                       │
                       ▼
              ┌──────────────────┐
              │ Spring Security  │
              └────────┬─────────┘
                       │
                       ▼
             ┌─────────────────────┐
             │ JWT Authentication  │
             └──────────┬──────────┘
                        │
                        ▼
                ┌──────────────┐
                │ Controller   │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │    DTO       │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   Service    │
                └──────┬───────┘
                       │
                       ▼
             ┌────────────────────┐
             │ ServiceImpl        │
             └─────────┬──────────┘
                       │
                       ▼
                ┌──────────────┐
                │ Repository   │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │    Entity    │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │    MySQL     │
                └──────────────┘
```

---

# 🔗 Frontend ↔ Backend Communication

```text
┌───────────────────────────────┐
│        React Frontend         │
│                               │
│ Pages → Services → Axios      │
└───────────────┬───────────────┘
                │
                │ REST API
                │ HTTP / JSON
                ▼
┌───────────────────────────────┐
│       Spring Boot Backend     │
│                               │
│ Controller                    │
│      ↓                        │
│ Service                       │
│      ↓                        │
│ Repository                    │
└───────────────┬───────────────┘
                │
                ▼
         ┌─────────────┐
         │    MySQL    │
         └─────────────┘
```

---

# 📦 Backend Dependencies & Build

The backend uses Maven.

Important project files:

```text
pom.xml
mvnw
mvnw.cmd
.mvn/
```

The Maven Wrapper allows the project to be built without requiring a globally installed Maven version.

---

# 🗄️ Database

The application uses:

```text
MySQL
```

The backend uses:

```text
Spring Data JPA
Hibernate
```

Main entities include:

```text
User
Company
Job
Application
JobApplication
SavedJob
Role
ApplicationStatus
```

---

# 📧 Email Service

The backend contains an email service:

```text
EmailService
EmailServiceImpl
```

The application can use email functionality for application-related communication.

Sensitive email credentials should be supplied through environment variables.

---

# ⚠️ Exception Handling

The backend contains centralized exception handling:

```text
GlobalExceptionHandler
ResourceNotFoundException
ExceptionResponse
```

This provides consistent API error responses.

---

# 📁 File Upload

The backend contains resume upload functionality.

```text
uploads/
└── resumes/
```

Resume files are handled through the dedicated resume controller and service.

> Uploaded resume files should normally not be committed to GitHub.

---

# 🧪 Testing

The backend contains Spring Boot test configuration:

```text
src/test/java/com/onkar/jobportal/
└── JobportalApplicationTests.java
```

Testing can be extended for:

* Authentication
* Job APIs
* Application APIs
* Company APIs
* User APIs
* Recruiter APIs
* Resume APIs
* Saved Job APIs

---

# 🛠️ Technology Stack

## Frontend

```text
React.js
Vite
JavaScript
Axios
React Router
Bootstrap/CSS
Chart.js
```

## Backend

```text
Java
Spring Boot
Spring Security
JWT
Spring Data JPA
Hibernate
Maven
```

## Database

```text
MySQL
```

## Architecture

```text
REST API
Layered Architecture
Role-Based Access Control
JWT Authentication
```

---

# 🚀 Installation

## Prerequisites

Install:

* Java
* Node.js
* npm
* MySQL
* Git

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/career-connect-job-portal.git
```

```bash
cd career-connect-job-portal
```

---

# 2️⃣ Database Setup

Create the database:

```sql
CREATE DATABASE career_connect;
```

Configure the backend database connection using environment variables.

Example:

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

---

# 3️⃣ Backend Setup

```bash
cd backend
```

Run:

```bash
./mvnw spring-boot:run
```

### Windows

```cmd
mvnw.cmd spring-boot:run
```

Backend:

```text
http://localhost:8080
```

---

# 4️⃣ Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🌐 Local Application Flow

```text
Browser
   │
   ├── http://localhost:5173
   │
   ▼
React Frontend
   │
   │ REST API
   ▼
Spring Boot
   │
   │ JPA / Hibernate
   ▼
MySQL
```

---

# 🔒 Security Notice

Never commit sensitive information to GitHub.

Do not commit:

```text
.env
Real database passwords
JWT secrets
Gmail App Passwords
API keys
Private credentials
Uploaded resumes
```

Use environment variables for sensitive configuration.

---

# 📌 Recommended Git Repository Structure

The final GitHub repository should be:

```text
career-connect-job-portal/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 📊 Complete Project Flow

```text
                           CAREER CONNECT
                            JOB PORTAL
                                │
                                ▼
                     ┌─────────────────────┐
                     │      HOME PAGE      │
                     └──────────┬──────────┘
                                │
                ┌───────────────┼────────────────┐
                │               │                │
                ▼               ▼                ▼
           JOB SEEKER       RECRUITER          ADMIN
                │               │                │
                ▼               ▼                ▼
             REGISTER        REGISTER          LOGIN
                │               │                │
                ▼               ▼                ▼
              LOGIN           LOGIN          DASHBOARD
                │               │                │
                ▼               ▼                │
           USER DASHBOARD   RECRUITER            │
                │           DASHBOARD             │
                │               │                │
       ┌────────┼───────┐   ┌───┼─────────┐      │
       │        │       │   │   │         │      │
       ▼        ▼       ▼   ▼   ▼         ▼      ▼
    PROFILE   JOBS   RESUME COMPANY JOBS APPLICANTS USERS
       │        │       │      │      │      │      │
       │        ▼       │      │      ▼      │      │
       │    JOB DETAILS │      │   MANAGE    │      │
       │        │       │      │    JOBS     │      │
       │    ┌───┴───┐   │      │      │      │      │
       │    │       │   │      │      ▼      │      │
       │    ▼       ▼   │      │  APPLICANTS  │      │
       │  SAVE     APPLY│      │             │      │
       │    │       │   │      └─────────────┘      │
       │    │       ▼   │                           │
       │    │  APPLICATION                          │
       │    │       │                               │
       │    ▼       ▼                               │
       │ SAVED   MY APPLICATIONS                    │
       │                                             │
       └─────────────────────────────────────────────┘
                              │
                              ▼
                     SPRING BOOT BACKEND
                              │
                              ▼
                     SPRING SECURITY + JWT
                              │
                              ▼
                         CONTROLLERS
                              │
                              ▼
                            DTOs
                              │
                              ▼
                          SERVICES
                              │
                              ▼
                       SERVICE IMPL
                              │
                              ▼
                        REPOSITORIES
                              │
                              ▼
                           ENTITIES
                              │
                              ▼
                            MYSQL
```

---

# 🎯 Project Objectives

The main objectives of Career Connect are:

1. Provide a centralized job-search platform.
2. Allow job seekers to find and apply for jobs.
3. Allow recruiters to post and manage job vacancies.
4. Allow recruiters to manage applicants.
5. Provide role-based dashboards.
6. Secure APIs using JWT authentication.
7. Manage user profiles and resumes.
8. Provide saved-job functionality.
9. Provide administrator controls.
10. Maintain job and application information in a centralized MySQL database.

---

# 🔮 Future Enhancements

Possible future improvements include:

* AI-powered job recommendations
* Resume parsing
* AI resume screening
* Advanced job filtering
* Real-time notifications
* Email notifications
* Interview scheduling
* Online interviews
* Candidate matching
* Recruiter analytics
* Cloud resume storage
* Docker deployment
* CI/CD
* Production cloud deployment
* Mobile application

---

# 👨‍💻 Developer

**Onkar Karande**

Full Stack Java Developer

**Project:** Career Connect — Job Portal

---

# ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

# 📄 License

This project is created for educational, development, and portfolio purposes.

