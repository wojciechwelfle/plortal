import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/users';

export const registerUser = (user) => axios.post(REST_API_URL + '/register', user);

export const loginUser = (user) => axios.post(REST_API_URL + '/login', user);

export const getUsers = (loginRequest) => axios.post(REST_API_URL, loginRequest);

export const deleteUserById = (id, loginRequest) => axios.delete(`${REST_API_URL}/${id}`, { data: loginRequest });

export const changePasswordByUserId = (userId, oldPassword, newPassword) => {
    return axios.post(`${REST_API_URL}/change-password/${userId}`, null, {
        params: {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
    });
};

export const updateBasicInfo = (userId, basicInfo) => {
    return axios.post(`${REST_API_URL}/update-basic-info/${userId}`, null, {
        params: {
            basicInfo: basicInfo
        }
    });
};

export const updateAdditionalInfo = (userId, additionalInfo) => {
    return axios.post(`${REST_API_URL}/update-additional-info/${userId}`, null, {
        params: {
            additionalInfo: additionalInfo
        }
    });
};

export const getUserById = (userId) => {
    return axios.get(`${REST_API_URL}/${userId}`);
};