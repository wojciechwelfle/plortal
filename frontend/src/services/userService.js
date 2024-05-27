import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/users';

export const registerUser = (user) => axios.post(REST_API_URL + '/register', user);

export const loginUser = (user) => axios.post(REST_API_URL + '/login', user);

export const getUsers = (loginRequest) => axios.post(REST_API_URL, loginRequest);

export const deleteUserById = (id, loginRequest) => axios.delete(`${REST_API_URL}/${id}`, { data: loginRequest });