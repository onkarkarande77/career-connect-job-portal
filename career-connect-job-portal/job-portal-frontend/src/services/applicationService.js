import API from "../api/axios";

export const applyJob = (application) => {
    return API.post("/application/apply", application);
};

export const getMyApplications = (userId) => {
    return API.get(`/application/user/${userId}`);
};

export const getApplicationsByJob = (jobId) => {
    return API.get(`/application/job/${jobId}`);
};

export const getApplicationsByRecruiter = (recruiterId) =>
    API.get(`/application/recruiter/${recruiterId}`);

export const updateApplicationStatus = (id, status) => {
    return API.put(`/application/${id}/status?status=${status}`);
};