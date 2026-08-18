import API from "../api/axios";

export const register = (user) => {
    return API.post("/auth/register", user);
};

export const login = (user) => {
    return API.post("/auth/login", user);
};

export const recruiterRegister = (data)=>{

    return API.post(
        "/auth/recruiter-register",
        data
    );

}