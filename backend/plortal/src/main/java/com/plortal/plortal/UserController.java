package com.plortal.plortal;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    ObjectMapper objectMapper;

    @GetMapping("api/v1/users")
    public ResponseEntity fetchAllUsers() throws JsonProcessingException {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }

    @PostMapping("api/v1/users")
    public ResponseEntity addNewUser(@RequestBody User user) {
        try {
            userService.addNewUser(user);
        } catch (IllegalStateException userExistException) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
        }
        return ResponseEntity.ok(user);
    }

}
