package com.plortal.plortal.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plortal.plortal.dto.LoginRequest;
import com.plortal.plortal.exception.*;
import com.plortal.plortal.model.entity.User;
import com.plortal.plortal.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
@Tag(name = "User")
public class UserController {
    private final UserService userService;
    ObjectMapper objectMapper;

    @GetMapping("api/v1/users")
    public ResponseEntity<?> fetchAllUsers() throws JsonProcessingException {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }

    @PostMapping("api/v1/users")
    public ResponseEntity<?> getUsers(@RequestBody LoginRequest loginRequest) throws JsonProcessingException {
        try {
            userService.authenticateUser(loginRequest.email(), loginRequest.password());
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("api/v1/users/register")
    public ResponseEntity<?> registerStudent(@RequestBody User user) {
        try {
            userService.registerStudent(user);
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
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            userService.authenticateUser(loginRequest.email(), loginRequest.password());
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(userService.findUserByEmail(loginRequest.email()));
    }

    @DeleteMapping("api/v1/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id, @RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest);
        try {
            userService.authenticateAdmin(loginRequest.email(), loginRequest.password());
        } catch (UserNotExistException | IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
        } catch (UserIsNotAdminException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User is not an admin");
        }

        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User id=" + id + " has been deleted!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @PostMapping("/api/v1/users/change-password/{userId}")
    public ResponseEntity<?> changePassword(@PathVariable Long userId, @RequestParam String oldPassword, @RequestParam String newPassword) {
        try {
            userService.changePassword(userId, oldPassword, newPassword);
            return ResponseEntity.ok("Password changed successfully");
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Old password is incorrect");
        } catch (PasswordInvalidException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

}
