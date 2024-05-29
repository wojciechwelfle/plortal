import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/plan';

export const getAllEvents = () => axios.get(REST_API_URL);

export const getEventByEmail = (dateString, userMail) => axios.get(`${REST_API_URL}/email?email=${userMail}`);

export const createEvent = (event) => axios.post(REST_API_URL, event);

export const fetchEvents = (email) => axios.get(`${REST_API_URL}/events`, {
    params: { email }
});

export const deleteEventById = (eventId) => axios.delete(`${REST_API_URL}/${eventId}`);