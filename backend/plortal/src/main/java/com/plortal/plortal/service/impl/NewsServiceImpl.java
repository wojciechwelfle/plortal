package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.News;
import com.plortal.plortal.dto.NewsDTO;
import com.plortal.plortal.mapper.NewsDTOMapper;
import com.plortal.plortal.repository.NewsRepository;
import com.plortal.plortal.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsServiceImpl implements NewsService {
    private final NewsRepository newsRepository;
    private final NewsDTOMapper newsDtoMapper;

    @Autowired
    public NewsServiceImpl(NewsRepository newsRepository, NewsDTOMapper newsDtoMapper) {
        this.newsRepository = newsRepository;
        this.newsDtoMapper = newsDtoMapper;
    }

    @Override
    public void addNews(NewsDTO newsDto) {
        newsRepository.save(newsDtoMapper.fromDTO(newsDto));
    }

    @Override
    public List<NewsDTO> getAllNews() {
        return newsRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(News::getModificationDate).reversed())
                .map(newsDtoMapper)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}

