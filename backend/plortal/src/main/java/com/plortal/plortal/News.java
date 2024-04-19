package com.plortal.plortal;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class News {
    @Id
    int id;

    private String title;

    private String photoUrl;

    private String description;

    private LocalDateTime modificationDate;
}
