import axios from "axios";

const REST_API_URL = 'http://localhost:8080/api/v1/schedule-notes';

export const getAllNotes = () => axios.get(REST_API_URL);

export const getNotesByDateAndEmail = (dateString, userMail) => axios.get(`${REST_API_URL}/date?date=${dateString}&&email=${userMail}`);

export const createScheduleNote = (note) => axios.post(REST_API_URL, note);

export const fetchNotes = (email) => axios.get(`${REST_API_URL}/notes`, {
    params: { email }
});

export const deleteNoteById = (noteId) => axios.delete(`${REST_API_URL}/${noteId}`);