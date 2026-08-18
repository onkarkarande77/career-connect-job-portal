import API from "../api/axios";

export const getCompanies = () => API.get("/company");

export const addCompany = (company) => API.post("/company", company);

export const updateCompany = (id, company) =>
    API.put(`/company/${id}`, company);

export const deleteCompany = (id) =>
    API.delete(`/company/${id}`);

export const getCompanyById = (id) =>
    API.get(`/company/${id}`);