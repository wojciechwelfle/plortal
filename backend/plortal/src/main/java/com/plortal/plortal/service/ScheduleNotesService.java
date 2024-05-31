package com.plortal.plortal.service;

import com.plortal.plortal.model.ScheduleNotes;

import java.util.List;

public interface ScheduleNotesService {
    ScheduleNotes saveOrUpdate(ScheduleNotes note);

    List<ScheduleNotes> findAll();

    List<ScheduleNotes> findByDateAndUserId(String dateString, Long userId);

    List<ScheduleNotes> findByUserIdAll(Long userId);

    void deleteNoteById(Long id);

    boolean isNoteValid(String description);
}
