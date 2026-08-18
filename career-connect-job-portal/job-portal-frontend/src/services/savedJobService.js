import API from "../api/axios";

// Save Job
export const saveJob = (userId, jobId) => {
    return API.post("/saved", {
        userId,
        jobId
    });
};

// Get Saved Jobs
export const getSavedJobs = (userId) => {
    return API.get(`/saved/user/${userId}`);
};

// Remove Saved Job
export const removeSavedJob = (savedJobId) => {
    return API.delete(`/saved/${savedJobId}`);
};