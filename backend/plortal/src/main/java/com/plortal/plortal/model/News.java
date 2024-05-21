package com.plortal.plortal.model;

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

    @NonNull
    @Column(name = "title", length = 70)
    private String title;

    @NonNull
    @Column(name = "photoUrl", length = 1000)
    private String photoUrl;

    @NonNull
    @Column(name = "description", length = 1000)
    private String description;

    @NonNull
    @Column(name = "modificationDate")
    private LocalDateTime modificationDate;
}
