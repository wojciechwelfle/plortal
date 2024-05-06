package com.plortal.plortal.mapper;

import com.plortal.plortal.model.News;
import com.plortal.plortal.dto.NewsDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.function.Function;

@Service
public class NewsDTOMapper implements Function<News, NewsDTO> {
    @Override
    public NewsDTO apply(News news) {
        return new NewsDTO(
                news.getId(),
                news.getTitle(),
                news.getPhotoUrl(),
                news.getDescription(),
                formatDateTimeToString(news.getModificationDate())
        );
    }

    public News fromDTO(NewsDTO newsDto) {
        return new News(
                newsDto.id(),
                newsDto.title(),
                newsDto.photoUrl(),
                newsDto.description(),
                formatStringToDateTime(newsDto.modificationDate())
        );
    }

    private static String formatDateTimeToString(LocalDateTime dateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        return dateTime.format(formatter);
    }

    private static LocalDateTime formatStringToDateTime(String dateTimeString) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
            return LocalDateTime.parse(dateTimeString, formatter);
        } catch (DateTimeParseException e) {
            System.out.println("Incorrect format. Return local datetime.");
            return LocalDateTime.now();
        }
    }
}
