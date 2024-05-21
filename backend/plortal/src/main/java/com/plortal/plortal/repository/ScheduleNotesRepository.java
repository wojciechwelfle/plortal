package com.plortal.plortal.repository;

import com.plortal.plortal.model.ScheduleNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.time.LocalDate;

public interface ScheduleNotesRepository extends JpaRepository<ScheduleNotes, Long> {

    List<ScheduleNotes> findByDateAndUserEmail(LocalDate date, String userEmail);

    List<ScheduleNotes> findByUserEmail(String userEmail);

}