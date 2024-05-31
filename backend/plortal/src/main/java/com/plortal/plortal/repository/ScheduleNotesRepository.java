package com.plortal.plortal.repository;

import com.plortal.plortal.model.ScheduleNotes;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.time.LocalDate;

public interface ScheduleNotesRepository extends JpaRepository<ScheduleNotes, Long> {

    List<ScheduleNotes> findByDateAndUserId(LocalDate date, Long userId);

    List<ScheduleNotes> findByUserId(Long userId);

}