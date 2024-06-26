package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.entity.ScheduleNotes;
import com.plortal.plortal.repository.ScheduleNotesRepository;
import com.plortal.plortal.service.ScheduleNotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Collections;
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

    public List<ScheduleNotes> findByDateAndUserId(String dateString, Long userId) {
        try {
            LocalDate date = LocalDate.parse(dateString);
            return scheduleNotesRepository.findByDateAndUserId(date, userId);
        } catch (DateTimeParseException e) {
            return Collections.emptyList();
        }
    }

    @Override
    public List<ScheduleNotes> findByUserIdAll(Long userId) {
        System.out.println("Finding notes for id: " + userId);
        List<ScheduleNotes> notes = scheduleNotesRepository.findByUserId(userId);
        System.out.println("Found notes: " + notes);
        return notes;
    }

    @Override
    public void deleteNoteById(Long id) {
        scheduleNotesRepository.deleteById(id);
    }

}