package com.plortal.plortal.model;

import jakarta.persistence.*;
import lombok.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Locale;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Table(name = "ScheduleNotes")
@Getter
@Setter
@NoArgsConstructor
public class ScheduleNotes
{
    @Id
    @Column(name = "noteId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "description", length = 50,nullable = false)
    private String description;

    @NonNull
    @Column(name = "date",nullable = false)
    private LocalDate date;
}
