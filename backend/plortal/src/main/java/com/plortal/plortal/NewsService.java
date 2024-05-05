package com.plortal.plortal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {
    private final NewsRepository newsRepository;
    private final NewsDTOMapper newsDtoMapper;

    @Autowired
    public NewsService(NewsRepository newsRepository, NewsDTOMapper newsDtoMapper) {
        this.newsRepository = newsRepository;
        this.newsDtoMapper = newsDtoMapper;
    }

    public void addNews(NewsDTO newsDto) {
        newsRepository.save(newsDtoMapper.fromDTO(newsDto));
    }

    public List<NewsDTO> getAllNews() {
        return newsRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(News::getModificationDate).reversed())
                .map(newsDtoMapper)
                .collect(Collectors.toList());
    }
}

