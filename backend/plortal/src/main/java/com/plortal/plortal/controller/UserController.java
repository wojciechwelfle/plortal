package com.plortal.plortal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plortal.plortal.model.User;
import com.plortal.plortal.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class UserController {
    private final UserService userService;
    ObjectMapper objectMapper;

    @GetMapping("api/v1/users")
    public ResponseEntity<?> fetchAllUsers() throws JsonProcessingException {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }

    @PostMapping("api/v1/users")
    public ResponseEntity<?> addNewUser(@RequestBody User user) {
        try {
            userService.addNewUser(user);
        } catch (IllegalStateException e) {
            if (e.getMessage().contains("is taken")) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(e.getMessage());
            } else if (e.getMessage().contains("is wrong")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(e.getMessage());
            } else if (e.getMessage().contains(" does not meet the requirements")) {
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                        .body(e.getMessage());
            }
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("api/v1/users/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            userService.authenticateUser(user.getEmail(), user.getPassword());
        } catch (IllegalStateException e) {
            if (e.getMessage().contains("User is not exist")) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            } else if (e.getMessage().contains("Password is incorrect")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }
        return ResponseEntity.ok("User");
    }
}
