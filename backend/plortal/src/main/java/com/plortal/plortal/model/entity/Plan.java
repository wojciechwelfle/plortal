package com.plortal.plortal.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Plan")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Plan {
    @Id
    @Column(name = "Id")
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

    @Column(name = "userId", nullable = false)
    private Long userId;
}
