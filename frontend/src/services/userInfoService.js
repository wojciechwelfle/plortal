import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/userinfo';

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

export const getBasicInfo = (userId) => {
    return axios.get(`${REST_API_URL}/${userId}/basic-info`);
};

export const getAdditionalInfo = (userId) => {
    return axios.get(`${REST_API_URL}/${userId}/additional-info`);
};