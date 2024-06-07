package com.plortal.plortal.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Courses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "courseId")
    private int id;

    @NonNull
    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;

    @NonNull
    @Size(max = 200)
    @Column(name = "address", length = 200)
    private String address;
}
