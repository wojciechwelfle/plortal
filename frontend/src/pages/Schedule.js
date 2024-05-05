import React, { Component,useState, useEffect } from 'react';
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
import AlertNotification from "../register-login/AlertNotification";



class Schedule extends Component {
    API_URL = "http://localhost:8080/api/v1/schedulenotes";

    constructor(props) {
        super(props);
        this.state = {
            firstDate: dayjs(),
            currentDate: dayjs(),
            selectedDate: dayjs(),
            notes: [],
            noteInput: "",
        };
        this.AlertNotification = React.createRef();
    }
    componentDidMount() {
        this.fetchNotesForDate(this.state.selectedDate.format('YYYY-MM-DD'));
    }
    handleNoteChange = (event) => {
        this.setState({ noteInput: event.target.value });
    };

    addNote = () => {
        const {selectedDate, noteInput} = this.state;
        if (selectedDate && noteInput) {
            const dateString = selectedDate.format('YYYY-MM-DD');
            this.addNoteToData(noteInput,dateString);
        } else{
            this.showAlertNotification("danger","Failed to add!","Selected date or note input is missing!");
            console.error("Selected date or note input is missing!");
        }
    };
        addNoteToData(noteInput,dateString){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: dateString,
                    description: noteInput,
                }),
            };

            fetch(this.API_URL, requestOptions)
                .then(response =>{
                    if (response.ok) {
                        this.showAlertNotification("success","Adding note completed!","Note is in your account");
                        console.log("Note added successfully");
                        this.fetchNotesForDate(dateString);
                        this.setState({ noteInput: '' });
                    } else {
                        this.showAlertNotification("danger","Failed to add!","Other error occured!");
                        console.error("Failed to add", response.status);
                        response.text().then(text => console.error(text));
                    }
                })
                .catch(error => {
                    console.error("Failed to add note",error);
                    console.error("Full error object:", error);
                });
        }
    showAlertNotification(variant, heading, alert){
        this.AlertNotification.current.setAlert(alert);
        this.AlertNotification.current.setHeading(heading);
        this.AlertNotification.current.setVariant(variant);
        this.AlertNotification.current.setVisible(true);
    }

    selectDate = (newValue) => {
        const dateString = newValue.format('YYYY-MM-DD');
        this.fetchNotesForDate(dateString);
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
    fetchNotesForDate = (dateString) => {
        fetch(`${this.API_URL}?date=${dateString}`)
            .then(response => response.json())
            .then(data => {
                console.log(`Notes for ${dateString}:`, data);
                this.setState(prevState => ({
                    notes: { ...prevState.notes, [dateString]: data.filter(note => note.date === dateString) }
                }));
            })
            .catch(error => console.error('Error fetching notes:', error));
    };



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
                            <AlertNotification class="notification" ref={this.AlertNotification}/>
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
                                            style={{height: '100px', width: '250px'}}
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