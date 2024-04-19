package com.plortal.plortal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NonNull;

import java.time.LocalDateTime;

@Entity
@Table(name = "News")
public class News {
    @Id
    int id;

    @NonNull
    @Column(name = "title", length = 70)
    private String title;

    @NonNull
    @Column(name = "photoUrl", length = 150)
    private String photoUrl;

    @NonNull
    @Column(name = "description", length = 300)
    private String description;

    @NonNull
    @Column(name = "modificationDate")
    private LocalDateTime modificationDate;
}
