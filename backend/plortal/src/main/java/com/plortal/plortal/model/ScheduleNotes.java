package com.plortal.plortal.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "ScheduleNotes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleNotes {
    @Id
    @Column(name = "noteId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "description", length = 50, nullable = false)
    private String description;

    @NonNull
    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "userEmail", nullable = false)
    private String userEmail;
}
