package com.plortal.plortal.controller;

import com.plortal.plortal.model.dto.LoginRequest;
import com.plortal.plortal.model.dto.NewsDTO;
import com.plortal.plortal.exception.IncorrectPasswordException;
import com.plortal.plortal.exception.UserIsNotAdminException;
import com.plortal.plortal.exception.UserNotExistException;
import com.plortal.plortal.service.NewsService;
import com.plortal.plortal.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/news")
@Tag(name = "News")
public class NewsController {
    private final NewsService newsService;

    private final UserService userService;

    @Autowired
    public NewsController(NewsService newsService, UserService userService) {
        this.newsService = newsService;
        this.userService = userService;
    }

    @GetMapping
    public List<NewsDTO> getAllNews() {
        return newsService.getAllNews();
    }

    @PostMapping
    public ResponseEntity<?> addNews(@Valid @RequestBody NewsDTO newsDto) {
        newsService.addNews(newsDto);
        return ResponseEntity.ok("News added!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNews(@PathVariable Long id, @RequestBody LoginRequest loginRequest) {
        try {
            userService.authenticateAdmin(loginRequest.email(), loginRequest.password());
        } catch (UserNotExistException | IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
        } catch (UserIsNotAdminException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User is not an admin");
        }

        try {
            newsService.deleteNews(id);
            return ResponseEntity.ok("News id=" + id + " has been deleted!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }
}
