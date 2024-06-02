import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/schedule-notes';

export const getNotesByDateAndUserId = (dateString, userId) => axios.get(`${REST_API_URL}/date?date=${dateString}&&userId=${userId}`);

export const createScheduleNote = (note) => axios.post(REST_API_URL, note);
