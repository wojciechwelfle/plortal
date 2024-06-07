import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/plan';

export const getAllEvents = () => axios.get(REST_API_URL);

export const getEventByEmail = (userId) => axios.get(`${REST_API_URL}/userId?userId=${userId}`);

export const createEvent = (event) => axios.post(REST_API_URL, event);

export const fetchEvents = (email) => axios.get(`${REST_API_URL}/events`, {
    params: { email }
});

export const deleteEventById = (eventId) => axios.delete(`${REST_API_URL}/${eventId}`);