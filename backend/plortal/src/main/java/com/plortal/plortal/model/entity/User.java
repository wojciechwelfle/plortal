package com.plortal.plortal.model.entity;

import com.plortal.plortal.model.enums.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;


@Entity
@Table(name = "Users")
@Getter
@Setter
public class User {
    @Id
    @Column(name = "userId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

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

    public User(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

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
