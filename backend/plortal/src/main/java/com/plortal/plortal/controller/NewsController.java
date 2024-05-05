package com.plortal.plortal.controller;

import com.plortal.plortal.dto.NewsDTO;
import com.plortal.plortal.service.NewsService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class NewsController {
    private final NewsService newsService;

    @GetMapping("/api/v1/news")
    public List<NewsDTO> getAllNews() {
        return newsService.getAllNews();
    }

    @PostMapping("/api/v1/news")
    public ResponseEntity addNews(@RequestBody NewsDTO newsDto) {
        newsService.addNews(newsDto);
        return ResponseEntity.ok().build();
    }

}
