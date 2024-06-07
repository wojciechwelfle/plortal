package com.plortal.plortal.repository;
import com.plortal.plortal.model.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    List<Plan> findByUserId( Long userId);

}
