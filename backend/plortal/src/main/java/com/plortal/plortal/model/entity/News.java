package com.plortal.plortal.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "News")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class News {
    @Id
    @Column(name = "newsId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "title", length = 70, nullable = false)
    private String title;

    @Column(name = "photoUrl", length = 1000, nullable = false)
    private String photoUrl;

    @Column(name = "description", length = 1000, nullable = false)
    private String description;

    @NonNull
    @Column(name = "modificationDate", nullable = false)
    private LocalDateTime modificationDate;
}
