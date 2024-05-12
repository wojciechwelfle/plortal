package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.ScheduleNotes;
import com.plortal.plortal.repository.ScheduleNotesRepository;
import com.plortal.plortal.service.ScheduleNotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
public class ScheduleNotesServiceImpl implements ScheduleNotesService {
    private final ScheduleNotesRepository scheduleNotesRepository;

    @Autowired
    public ScheduleNotesServiceImpl(ScheduleNotesRepository repository) {
        this.scheduleNotesRepository = repository;
    }

    public ScheduleNotes saveOrUpdate(ScheduleNotes note) {
        return scheduleNotesRepository.save(note);
    }

    public List<ScheduleNotes> findAll() {
        return scheduleNotesRepository.findAll();
    }

    public List<ScheduleNotes> findByDateAndEmail(String dateString, String userEmail) {
        try {
            LocalDate date = LocalDate.parse(dateString);
            return scheduleNotesRepository.findByDateAndEmail(date, userEmail);
        } catch (DateTimeParseException e) {
            throw new RuntimeException("Failed to parse date: " + dateString, e);
        }
    }

    public boolean isNoteValid(String description) {
        return description != null && description.length() <= 50;
    }
}