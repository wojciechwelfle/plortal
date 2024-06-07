package com.plortal.plortal.repository;

import com.plortal.plortal.model.Plan;
import com.plortal.plortal.model.entity.ScheduleNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.time.LocalDate;
public interface PlanRepository extends JpaRepository<Plan, Long> {
    List<Plan> findByUserId( Long userId);
//    @Query("SELECT p FROM Plan p WHERE p.time=:time and p.userEmail = :userEmail")
//    List<Plan> findByTimeAndEmail(@Param("userEmail") String time,@Param("userEmail") String userEmail);
}
