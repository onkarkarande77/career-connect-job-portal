import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/jobseeker/Dashboard";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

import Unauthorized from "./pages/Unauthorized";

import PrivateRoute from "./components/PrivateRoute";
import RoleRoute from "./components/RoleRoute";
import CompanyList from "./pages/company/CompanyList";
import Profile from "./pages/profile/Profile";
import JobList from "./pages/jobs/JobList";
import Jobs from "./pages/jobs/Jobs";
import JobDetails from "./pages/jobs/JobDetails";
import MyApplications from "./pages/application/MyApplications";
import SavedJobs from "./pages/jobs/SavedJobs";
import ManageJobs from "./pages/recruiter/ManageJobs";
import EditJob from "./pages/recruiter/EditJob";
import Applicants from "./pages/recruiter/Applicants";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageCompanies from "./pages/admin/ManageCompanies";
import AddJob from "./pages/recruiter/AddJob";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
import RecruiterRegister from "./pages/auth/RecruiterRegister";
import AdminLogin from "./pages/auth/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/register" element={<Register />} />

        <Route path="/recruiter-register" element={<RecruiterRegister />} />

        <Route path="/companies" element={<CompanyList />} />

        <Route path="/jobs" element={<JobList />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/my-applications" element={<MyApplications />} />

        <Route
          path="/saved-jobs"
          element={
            <PrivateRoute>
              <SavedJobs />
            </PrivateRoute>
          }
        />

        <Route
          path="/manage-jobs"
          element={
            <RoleRoute role="RECRUITER">
              <ManageJobs />
            </RoleRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/add-job"
          element={
            <RoleRoute role="RECRUITER">
              <AddJob />
            </RoleRoute>
          }
        />

        <Route
          path="/recruiter/profile"
          element={
            <RoleRoute role="RECRUITER">
              <RecruiterProfile />
            </RoleRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RoleRoute role="JOB_SEEKER">
              <Dashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/recruiter"
          element={
            <RoleRoute role="RECRUITER">
              <RecruiterDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <RoleRoute role="ADMIN">
              <AdminDashboard />
            </RoleRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/edit-job/:id"
          element={
            <RoleRoute role="RECRUITER">
              <EditJob />
            </RoleRoute>
          }
        />

        <Route
          path="/applicants"
          element={
            <RoleRoute role="RECRUITER">
              <Applicants />
            </RoleRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <RoleRoute role="ADMIN">
              <ManageUsers />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/companies"
          element={
            <RoleRoute role="ADMIN">
              <ManageCompanies />
            </RoleRoute>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <RoleRoute role="ADMIN">
              <ManageJobs />
            </RoleRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
