import API from "../api/axios";

export const getRecruiterDashboard = (recruiterId) => {
    return API.get(`/recruiter/dashboard/${recruiterId}`);
};