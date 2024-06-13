import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/plans";

export const getEventByUserId = (userId) =>axios.get(`${REST_API_URL}/${userId}`);

export const createEvent = (event) => axios.post(REST_API_URL, event);

export const deleteEvent = (id) => axios.delete(`${REST_API_URL}/${id}`);
