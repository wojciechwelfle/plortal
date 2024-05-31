import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/schedule-notes';

export const getAllNotes = () => axios.get(REST_API_URL);

export const getNotesByDateAndUserId = (dateString, userId) => axios.get(`${REST_API_URL}/date?date=${dateString}&&userId=${userId}`);

export const createScheduleNote = (note) => axios.post(REST_API_URL, note);

export const fetchNotes = (userId) => axios.get(`${REST_API_URL}/notes`, {
    params: { userId }
});

export const deleteNoteById = (noteId) => axios.delete(`${REST_API_URL}/${noteId}`);