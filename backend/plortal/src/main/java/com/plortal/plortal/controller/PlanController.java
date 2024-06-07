package com.plortal.plortal.controller;

import com.plortal.plortal.model.Plan;
import com.plortal.plortal.service.PlanService;
import com.plortal.plortal.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/plan")
@Tag(name = "Plan")
public class PlanController {

    private final PlanService planService;

    @Autowired
    public PlanController(PlanService ps) {
        this.planService = ps;
    }

    @GetMapping("/plans")
    public ResponseEntity<?> findByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return ResponseEntity.badRequest().body("id parameter is required");
        }
        List<Plan> plans = planService.findByUserIdAll(userId);
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }



}
