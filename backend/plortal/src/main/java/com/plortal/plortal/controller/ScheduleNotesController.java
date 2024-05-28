package com.plortal.plortal.controller;

import com.plortal.plortal.model.ScheduleNotes;
import com.plortal.plortal.service.ScheduleNotesService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@Tag(name = "Schedule Notes")
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
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/api/v1/schedule-notes/date")
    public ResponseEntity<List<ScheduleNotes>> getNotesByDateAndUserId(@RequestParam String date, @RequestParam Long userId) {
        try {
            List<ScheduleNotes> notes = scheduleNotesService.findByDateAndUserId(date, userId);
            return new ResponseEntity<>(notes, HttpStatus.OK);
        } catch (DateTimeParseException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/api/v1/schedule-notes/notes")
    public ResponseEntity<?> findByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null || userId < 0) {
            return ResponseEntity.badRequest().body("id parameter is required");
        }
        List<ScheduleNotes> notes = scheduleNotesService.findByUserIdAll(userId);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @DeleteMapping("/api/v1/schedule-notes/{id}")
    public ResponseEntity<Void> deleteScheduleNote(@PathVariable Long id) {
        try {
            scheduleNotesService.deleteNoteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}