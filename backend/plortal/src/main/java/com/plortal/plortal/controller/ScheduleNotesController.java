package com.plortal.plortal.controller;

import com.plortal.plortal.model.ScheduleNotes;
import com.plortal.plortal.service.ScheduleNotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ScheduleNotesController {
    private final ScheduleNotesService scheduleNotesService;

    @Autowired
    public ScheduleNotesController(ScheduleNotesService scheduleNotesService) {
        this.scheduleNotesService = scheduleNotesService;
    }

    @PostMapping("/api/v1/schedule-notes")
    public ResponseEntity<ScheduleNotes> createScheduleNote(@RequestBody ScheduleNotes scheduleNote) {
        if (!scheduleNotesService.isNoteValid(scheduleNote.getDescription())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        try {
            ScheduleNotes savedNote = scheduleNotesService.saveOrUpdate(scheduleNote);
            return new ResponseEntity<>(savedNote, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/api/v1/schedule-notes")
    public ResponseEntity<List<ScheduleNotes>> getAllScheduleNotes() {
        List<ScheduleNotes> notes = scheduleNotesService.findAll();
        if (notes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/api/v1/schedule-notes/date")
    public ResponseEntity<List<ScheduleNotes>> getNotesByDate(@RequestParam String date, String email) {
        LocalDate parsedDate = LocalDate.parse(date);
        String dateString = parsedDate.toString();
        try {
            List<ScheduleNotes> notes = scheduleNotesService.findByDateAndEmail(dateString, email);
            if (notes.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(notes, HttpStatus.OK);
        } catch (DateTimeParseException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}