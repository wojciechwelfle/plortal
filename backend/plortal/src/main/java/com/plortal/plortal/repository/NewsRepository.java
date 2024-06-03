package com.plortal.plortal.repository;

import com.plortal.plortal.model.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {
}
