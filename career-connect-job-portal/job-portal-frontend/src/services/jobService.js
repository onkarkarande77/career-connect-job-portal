import API from "../api/axios";

export const getAllJobs = () => {
    return API.get("/jobs");
};

export const getJobById = (id) => {
    return API.get(`/jobs/${id}`);
};

export const addJob = (job) => {
    return API.post("/jobs", job);
};

export const updateJob = (id, job) => {
    return API.put(`/jobs/${id}`, job);
};

export const deleteJob = (id) => {
    return API.delete(`/jobs/${id}`);
};

export const searchJobs = (keyword) => {
    return API.get(`/jobs/search?keyword=${keyword}`);
};

export const getJobsByLocation = (location) => {
    return API.get(`/jobs/location/${location}`);
};

export const getJobsByType = (type) => {
    return API.get(`/jobs/type/${type}`);
};

export const getJobsByExperience = (experience) => {
    return API.get(`/jobs/experience/${experience}`);
};

 