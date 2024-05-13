package com.plortal.plortal.service;

import com.plortal.plortal.model.ScheduleNotes;

import java.util.List;

public interface ScheduleNotesService {
    ScheduleNotes saveOrUpdate(ScheduleNotes note);

    List<ScheduleNotes> findAll();

    List<ScheduleNotes> findByDateAndUserEmail(String dateString, String userEmail);

    boolean isNoteValid(String description);
}
