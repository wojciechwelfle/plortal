package com.plortal.plortal.model.entity;

import com.plortal.plortal.model.enums.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;


@Entity
@Table(name = "Users")
@Getter
@Setter
public class User {
    @Id
    @Column(name = "userId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Size(min = 3, max = 60)
    @Column(name = "firstName")
    private String firstName;

    @Size(min = 2, max = 40)
    @Column(name = "lastName")
    private String lastName;

    @NonNull
    @Size(min = 7, max = 100)
    @Column(name = "email", length = 100)
    private String email;

    @NonNull
    @Size(min = 8, max = 50)
    @Column(name = "password", length = 100)
    private String password;

    @NonNull
    @Column(name = "role")
    private UserRole role;

    @Size(max = 250)
    @Column(name = "basicInfo", length = 250)
    private String basicInfo;

    @Size(max = 250)
    @Column(name = "additionalInfo", length = 250)
    private String additionalInfo;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
