import API from "../api/axios";

export const uploadResume = (userId, file) => {

    const formData = new FormData();

    formData.append("file", file);

    return API.post(
        `/resume/upload/${userId}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );
};

export const downloadResume = (userId) => {

    return API.get(
        `/resume/download/${userId}`,
        {
            responseType: "blob"
        }
    );

};
