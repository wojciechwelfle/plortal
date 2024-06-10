package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.entity.Plan;
import com.plortal.plortal.repository.PlanRepository;
import com.plortal.plortal.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;

    @Autowired
    public PlanServiceImpl(PlanRepository repository) {
        planRepository = repository;
    }
    public Plan saveOrUpdate(Plan plan){
        return planRepository.save(plan);
    }


    @Override
    public List<Plan> findByUserId(Long userId) {
        System.out.println("Finding plans for id: " + userId);
        List<Plan> plans = planRepository.findByUserId(userId);
        System.out.println("Found notes: " + plans);
        return plans;
    }

    @Override
    public void createEvent(Plan plan){
        planRepository.save(plan);
    }
//    void deletePlanById(Long id){
//        planRepository.deleteById(id);
//    }
}
