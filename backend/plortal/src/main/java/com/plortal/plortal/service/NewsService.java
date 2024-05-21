package com.plortal.plortal.service;

import com.plortal.plortal.dto.NewsDTO;

import java.util.List;

public interface NewsService {
    void addNews(NewsDTO newsDto);

    List<NewsDTO> getAllNews();

    void deleteNews(Long id);
}
