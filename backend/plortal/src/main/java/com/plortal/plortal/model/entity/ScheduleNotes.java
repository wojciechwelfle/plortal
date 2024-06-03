package com.plortal.plortal.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
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
    @Size(max = 50)
    @Column(name = "description", length = 50, nullable = false)
    private String description;

    @NonNull
    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "userId", nullable = false)
    private Long userId;
}
