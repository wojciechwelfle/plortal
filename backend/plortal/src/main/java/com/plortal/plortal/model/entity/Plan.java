package com.plortal.plortal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Plans")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Plan {
    @Id
    @Column(name = "noteId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "subjectName", length = 50, nullable = false)
    private String description;

    @NonNull
    @Column(name = "weekday", length = 10,nullable = false)
    private String weekday;

    @NonNull
    @Column(name = "time", length = 5,nullable = false)
    private String time;

    @Column(name = "userEmail", nullable = false)
    private String userEmail;
}
