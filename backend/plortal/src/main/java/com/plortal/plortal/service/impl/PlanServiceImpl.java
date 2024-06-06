package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.Plan;
import com.plortal.plortal.model.entity.ScheduleNotes;
import com.plortal.plortal.repository.PlanRepository;
import com.plortal.plortal.repository.ScheduleNotesRepository;
import com.plortal.plortal.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;

    @Autowired
    public PlanServiceImpl(PlanRepository repository) {
        this.planRepository = repository;
    }
    public Plan saveOrUpdate(Plan plan){
        return this.planRepository.save(plan);
    }


    @Override
    public List<Plan> findByUserIdAll(Long userId) {
        System.out.println("Finding planss for id: " + userId);
        List<Plan> plans = planRepository.findByUserId(userId);
        System.out.println("Found notes: " + plans);
        return plans;
    }

//    @Override
//    void deletePlanById(Long id){
//        planRepository.deleteById(id);
//    }
}
