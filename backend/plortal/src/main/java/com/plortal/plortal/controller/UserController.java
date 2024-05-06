package com.plortal.plortal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plortal.plortal.exception.*;
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
        } catch (EmailTakenException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (EmailInvalidException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        } catch (PasswordInvalidException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("api/v1/users/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            userService.authenticateUser(user.getEmail(), user.getPassword());
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok("User");
    }
}
