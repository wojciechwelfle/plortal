package com.plortal.plortal.repository;

import com.plortal.plortal.model.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {
}