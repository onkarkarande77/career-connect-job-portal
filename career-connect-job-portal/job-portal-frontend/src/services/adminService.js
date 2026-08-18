import API from "../api/axios";

export const getDashboardStats = () => {
    return API.get("/admin/dashboard");
};

export const getUsers = () => {
    return API.get("/admin/users");
};

export const getCompanies = () => {
    return API.get("/admin/companies");
};

export const getJobs = () => {
    return API.get("/admin/jobs");
    
};

export const deleteUser = (id) => {
    return API.delete(`/admin/user/${id}`);
};

export const deleteCompany = (id) => {
    return API.delete(`/admin/company/${id}`);
};

export const deleteJob = (id) => {
    return API.delete(`/admin/job/${id}`);
};