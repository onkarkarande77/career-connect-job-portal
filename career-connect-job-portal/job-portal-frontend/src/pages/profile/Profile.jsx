import { useAuth } from "../../context/AuthContext";

import JobSeekerProfile from "./JobSeekerProfile";
import RecruiterProfile from "./RecruiterProfile";
import AdminProfile from "./AdminProfile";

function Profile() {

    const { user } = useAuth();

    if (!user) {
        return null;
    }

    if (user.role === "JOB_SEEKER") {
        return <JobSeekerProfile />;
    }

    if (user.role === "RECRUITER") {
        return <RecruiterProfile />;
    }

    if (user.role === "ADMIN") {
        return <AdminProfile />;
    }

    return <h3 className="text-center mt-5">Invalid Role</h3>;
}

export default Profile;