package com.plortal.plortal.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Plan")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Plan {
    @Id
    @Column(name = "planId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "subjectName", length = 50,nullable = false)
    private String subjectName;

    @NonNull
    @Column(name = "description", length = 50,nullable = false)
    private String description;

    @NonNull
    @Column(name = "weekday", length = 10,nullable = false)
    private String weekday;

    @NonNull
    @Column(name = "time", length = 10,  nullable = false)
    private String time;

    @Column(name = "userId", nullable = false)
    private Long userId;
}
