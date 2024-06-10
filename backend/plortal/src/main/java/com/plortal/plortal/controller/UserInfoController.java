package com.plortal.plortal.controller;

import com.plortal.plortal.exception.UserNotExistException;
import com.plortal.plortal.service.UserInfoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("api/v1/userinfo")
@AllArgsConstructor
@Tag(name = "UserInfo")
public class UserInfoController {
    private final UserInfoService userInfoService;

    @PostMapping("/update-basic-info/{userId}")
    public ResponseEntity<?> updateBasicInfo(@PathVariable Long userId, @RequestParam String basicInfo) {
        try {
            userInfoService.updateBasicInfo(userId, basicInfo);
            return ResponseEntity.ok("Basic info updated successfully");
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @PostMapping("/update-additional-info/{userId}")
    public ResponseEntity<?> updateAdditionalInfo(@PathVariable Long userId, @RequestParam String additionalInfo) {
        try {
            userInfoService.updateAdditionalInfo(userId, additionalInfo);
            return ResponseEntity.ok("Additional info updated successfully");
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @GetMapping("/{userId}/basic-info")
    public ResponseEntity<?> getBasicInfo(@PathVariable Long userId) {
        try {
            String basicInfo = userInfoService.getBasicInfo(userId);
            return ResponseEntity.ok(basicInfo);
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @GetMapping("/{userId}/additional-info")
    public ResponseEntity<?> getAdditionalInfo(@PathVariable Long userId) {
        try {
            String additionalInfo = userInfoService.getAdditionalInfo(userId);
            return ResponseEntity.ok(additionalInfo);
        } catch (UserNotExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }
}
