import React, { useState, useRef, useEffect } from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import "./Schedule.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./NotesNotification.css";
import NotesNotification from "./NotesNotification";
import { createScheduleNote, getNotesByDateAndUserId } from "../../services/scheduleNotesService";

const Schedule = () => {
    const [firstDate, setFirstDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState("");
    const userId = localStorage.getItem("id");
    const NotesNotificationRef = useRef();

    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 25;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize] = useState(savedFontSize);
    const [theme] = useState(savedTheme);

    useEffect(() => {
        fetchNotesForDate(selectedDate.format("YYYY-MM-DD"), userId);
    }, [selectedDate, userId]);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    const handleNoteChange = (event) => {
        setNoteInput(event.target.value);
    };

    const addNote = () => {
        if (selectedDate && noteInput) {
            const dateString = selectedDate.format("YYYY-MM-DD");
            addNoteToData(noteInput, dateString, userId);
        } else {
            showNotesNotification(
                "warning",
                "Niepowodznie! Uzupełnij datę i nazwę wydarzenia"
            );
            console.error("Selected date or note input is missing!");
        }
    };

    const addNoteToData = (noteInput, dateString, userId) => {
        const note = {
            date: dateString,
            description: noteInput,
            userId: userId,
        };

        createScheduleNote(note)
            .then((response) => {
                console.log(response.data);
                showNotesNotification(
                    "success",
                    "Sukces! Przypisano notatkę do twojego konta"
                );
                console.log("Note added successfully");
                fetchNotesForDate(dateString, userId);
                setNoteInput("");
            })
            .catch((error) => {
                showNotesNotification(
                    "danger",
                    "Błąd! Maksymalnie można wpisać 50 znaków"
                );
                console.error("Failed to add", error.response.status);
            });
    };

    const selectDate = (newValue) => {
        const dateString = newValue.format("YYYY-MM-DD");
        fetchNotesForDate(dateString, userId);
        setSelectedDate(newValue);
        setNoteInput("");
    };

    const handleFirstDateChange = (newValue) => {
        setFirstDate(newValue);
        selectDate(newValue);
    };

    const fetchNotesForDate = (dateString, userId) => {
        getNotesByDateAndUserId(dateString, userId)
            .then((response) => {
                console.log(`Notes for ${dateString}:`, response.data);
                setNotes((prevNotes) => ({
                    ...prevNotes,
                    [dateString]: response.data,
                }));
            })
            .catch((error) => console.error("Error fetching notes:", error));
    };

    const showNotesNotification = (variant, alert) => {
        NotesNotificationRef.current.setNote(alert);
        NotesNotificationRef.current.setVariantNote(variant);
        NotesNotificationRef.current.setVisibleNote(true);
    };

    const selectedDateString = selectedDate.format("YYYY-MM-DD");
    const todaysNotes = notes[selectedDateString] || [];

    return (
        <>
            <div className="container">
                <div className="top-columns">
                    <div className="left-column">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                value={firstDate}
                                onChange={(newValue) => {
                                    handleFirstDateChange(newValue);
                                    selectDate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="right-column">
                        <NotesNotification
                            className="NotesAlert"
                            ref={NotesNotificationRef}
                        />
                        <Form className="form-text">
                            <Form.Group>
                                <Form.Label className="form-label">
                                    <b>
                                        Dodaj notatkę dla {selectedDateString}:
                                    </b>
                                </Form.Label>
                                <br></br>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    className="floatingTextarea"
                                >
                                    <Form.Control
                                        value={noteInput}
                                        onChange={handleNoteChange}
                                        as="textarea"
                                        style={{
                                            height: "100px",
                                            width: "300px",
                                            fontSize: `${fontSize}px`
                                        }}
                                        maxLength="60"
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Button
                                variant="dark"
                                size="lg"
                                className="btn-notes"
                                onClick={addNote}
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                Dodaj notatkę
                            </Button>{" "}
                        </Form>
                    </div>
                </div>

                <div className="under-column">
                    {selectedDate && (
                        <>
                            <h3>Notatki dla {selectedDateString}</h3>
                            {todaysNotes.length > 0 ? (
                                <ul>
                                    {todaysNotes.map((note) => (
                                        <li key={note.id}>
                                            <p>
                                                <b>Opis</b>
                                            </p>
                                            <p>{note.description}</p>
                                            <p>
                                                <b>Data</b>
                                            </p>
                                            <p>{note.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Brak notatek na ten dzień</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Schedule;
