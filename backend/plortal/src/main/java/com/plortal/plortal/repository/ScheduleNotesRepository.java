package com.plortal.plortal.repository;

import com.plortal.plortal.model.ScheduleNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.time.LocalDate;

public interface ScheduleNotesRepository extends JpaRepository<ScheduleNotes, Long> {
    @Query("SELECT s FROM ScheduleNotes s WHERE s.date = :date AND s.userEmail = :userEmail")
    List<ScheduleNotes> findByDate(@Param("date") LocalDate date, @Param("userEmail") String userEmail);
}