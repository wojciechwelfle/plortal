package com.plortal.plortal.service;


import com.plortal.plortal.model.entity.Plan;

import java.util.List;

public interface PlanService {
    Plan saveOrUpdate(Plan plan);

    List<Plan> findByUserId(Long userId);
    void createEvent(Plan plan);

   // public List<Plan> findByUserId(Long userId);

    //void deleteNoteById(Long id);

    default boolean isNameValid(String n){
        return n != null && n.length() <= 50;
    }
}

