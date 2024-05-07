import React, { Component} from 'react';
import Card from 'react-bootstrap/Card';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import LogoutButton from "../components/LogoutButton";
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import "./Schedule.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './NotesNotification.css';
import NotesNotification from "./NotesNotification";



class Schedule extends Component {
    API_URL = "http://localhost:8080/api/v1/schedulenotes";

    constructor(props) {
        super(props);
        this.NotesNotification = React.createRef();
        this.state = {
            firstDate: dayjs(),
            currentDate: dayjs(),
            selectedDate: dayjs(),
            notes: [],
            noteInput: "",
            userMail: localStorage.getItem("email"),
        };

    }

    componentDidMount() {
        this.fetchNotesForDate(this.state.selectedDate.format('YYYY-MM-DD'),this.state.userMail);
    }
    handleNoteChange = (event) => {
        this.setState({ noteInput: event.target.value });
    };

    addNote = () => {
        const {selectedDate, noteInput, userMail} = this.state;
        if (selectedDate && noteInput) {
            const dateString = selectedDate.format('YYYY-MM-DD');
            this.addNoteToData(noteInput,dateString,userMail);
        } else{
            this.showNotesNotification("warning","Failed to add! Selected date or note input is missing!");
            console.error("Selected date or note input is missing!");
        }
    };
    addNoteToData(noteInput,dateString,userMail){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: dateString,
                    description: noteInput,
                    userEmail : userMail
                }),
            };

            fetch(this.API_URL, requestOptions)
                .then(response =>{
                    if (response.ok) {
                        this.showNotesNotification("success","Adding note completed! Note is signed to your account");
                        console.log("Note added successfully");
                        this.fetchNotesForDate(dateString,userMail);
                        this.setState({ noteInput: '' });
                    } else {
                        this.showNotesNotification("danger","Failed to add! Message is above 50 character!");
                        console.error("Failed to add", response.status);
                        response.text().then(text => console.error(text));
                    }
                })
                .catch(error => {
                    console.error("Failed to add note",error);
                    console.error("Full error object:", error);
                });
    }

    selectDate = (newValue) => {
        const dateString = newValue.format('YYYY-MM-DD');
        const userMail = this.state.userMail;
        this.fetchNotesForDate(dateString,userMail);
        this.setState({
            selectedDate: newValue,
            noteInput: '',
        });
    };

    handleFirstDateChange = (newValue) => {
        this.setState({
            firstDate: newValue,
        });
    };

    goToNextMonth = () => {
        this.setState(prevState => ({
            firstDate: prevState.firstDate.add(1, 'month'),
        }));
    };

    goToPreviousMonth = () => {
        this.setState(prevState => ({
            firstDate: prevState.firstDate.subtract(1, 'month'),
        }));
    };
    fetchNotesForDate = (dateString,userMail) => {
        fetch(`${this.API_URL}?date=${dateString}&userEmail=${userMail}`)
            .then(response => response.json())
            .then(data => {
                console.log(`Notes for ${dateString}:`, data);
                this.setState(prevState => ({
                    notes: { ...prevState.notes, [dateString]: data.filter(note => note.date === dateString && note.userEmail === userMail)  }
                }));
            })
            .catch(error => console.error('Error fetching notes:', error));
    };

    showNotesNotification(variant, alert){
        this.NotesNotification.current.setNote(alert);
        this.NotesNotification.current.setVariantNote(variant);
        this.NotesNotification.current.setVisibleNote(true);
    }

    render() {
        const { selectedDate, notes, firstDate } = this.state;
        const selectedDateString = selectedDate.format('YYYY-MM-DD');
        const todaysNotes = notes[selectedDateString] || [];
        return (
            <>
                <Card body>Nazwa  <LogoutButton/> </Card>
                <div className="container">
                    <div className="top-columns">
                        <div className="left-column">
                            <Button className="button-prev" onClick={this.goToPreviousMonth}>&lt;</Button>
                            <Button className="button-next" onClick={this.goToNextMonth}>&gt;</Button>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={firstDate}
                                    onChange={(newValue) => {
                                        this.handleFirstDateChange(newValue);
                                        this.selectDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="right-column">
                            <NotesNotification className="NotesAlert" ref={this.NotesNotification}/>
                            <Form className="form-text">
                                <Form.Group>
                                    <Form.Label className="form-label"><b>Dodaj notatkę
                                        dla {selectedDateString}:</b></Form.Label>
                                    <br></br>
                                    <FloatingLabel controlId="floatingTextarea" className="floatingTextarea">
                                        <Form.Control
                                            value={this.state.noteInput}
                                            onChange={this.handleNoteChange}
                                            as="textarea"
                                            style={{height: '100px', width: '300px'}}
                                            maxLength="60"
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button variant="dark" size="lg" className="btn-notes" onClick={this.addNote}>Dodaj
                                    notatkę</Button>{' '}
                            </Form>
                        </div>
                    </div>

                    <div className="under-column">
                        {selectedDate && (
                            <>
                                <h3>Notatki dla {selectedDateString}</h3>
                                {todaysNotes.length > 0 ? (
                                    <ul>
                                        {todaysNotes.map(note => (
                                            <li key={note.id}>
                                                <p><b>Description</b></p>
                                                <p>{note.description}</p>
                                                <p><b>Date</b></p>
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
    }
}

export default Schedule;