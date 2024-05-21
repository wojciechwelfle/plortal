import React, { useState, useEffect } from 'react';
import './DeleteNote.css';
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";

const REST_API_URL = 'http://localhost:8080/api/v1/schedule-notes';

const fetchNotes = async (email) => {
    try {
        const response = await axios.get(`${REST_API_URL}/notes`, {
            params: { email }
        });
        console.log("Fetched notes:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};

const deleteNoteById = async (noteId) => {
    try {
        const response = await axios.delete(`${REST_API_URL}/${noteId}`);
        if (response.status !== 204) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
};

const DeleteNote = () => {
    const [notes, setNotes] = useState([]);
    const userMail = localStorage.getItem('email');

    useEffect(() => {
        if (userMail) {
            fetchAllNotes(userMail);
        }
    }, [userMail]);

    const fetchAllNotes = async (email) => {
        try {
            const data = await fetchNotes(email);
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleDeleteNote = async (noteId) => {
        try {
            await deleteNoteById(noteId);
            console.log(`Deleted note with ID: ${noteId}`);
            fetchAllNotes(userMail);
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    return (
        <div className="delete-note-container">
            <h3>Usuń notatkę</h3>
            <div className="notes-list">
                {notes.length > 0 ? (
                    <ul>
                        {notes.map(note => (
                            <li key={note.id}>
                                <p><b>ID:</b> {note.id}</p>
                                <p><b>Opis:</b> {note.description}</p>
                                <p><b>Data:</b> {note.date}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteNote(note.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Brak notatek</p>
                )}
            </div>
        </div>
    );
};

export default DeleteNote;
