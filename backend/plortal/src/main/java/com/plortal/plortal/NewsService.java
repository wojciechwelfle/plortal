package com.plortal.plortal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service

public class NewsService {
    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }


    public void addNews(News news) {
        newsRepository.save(news);
    }

    public List<News> getAllNews() {
        List<News> sortedNews = newsRepository.findAll();
        sortedNews.sort(Comparator.comparing(News::getModificationDate).reversed());
        return sortedNews;
    }
}

