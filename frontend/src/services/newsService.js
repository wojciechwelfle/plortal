import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/news";

export const getAllNews = () => axios.get(REST_API_URL);

export const deleteNews = (id, loginRequest) => axios.delete(`${REST_API_URL}/${id}`, { data: loginRequest });

export const addNews = (news) => axios.post(REST_API_URL, news);