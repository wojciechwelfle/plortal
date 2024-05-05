package com.plortal.plortal.service;

import com.plortal.plortal.model.ScheduleNotes;
import com.plortal.plortal.repository.ScheduleNotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
public class ScheduleNotesService {
    private final ScheduleNotesRepository repository;

    @Autowired
    public ScheduleNotesService(ScheduleNotesRepository repository) {
        this.repository = repository;
    }

    public ScheduleNotes saveOrUpdate(ScheduleNotes note) {
        return repository.save(note);
    }

    public List<ScheduleNotes> findAll() {
        return repository.findAll();
    }

    public List<ScheduleNotes> findByDate(String dateString) {
        try {
            LocalDate date = LocalDate.parse(dateString);
            return repository.findByDate(date);
        } catch (DateTimeParseException e) {
            throw new RuntimeException("Failed to parse date: " + dateString, e);
        }
    }
    public boolean isNoteValid(String description){
        if (description == null || description.length() > 50){
            return false;
        }
        return true;
    }
}