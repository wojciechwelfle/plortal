package com.plortal.plortal.service;

import com.plortal.plortal.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getUsers();

    void registerStudent(User user);

    void authenticateUser(String email, String password);

    void authenticateAdmin(String email, String password);

    Optional<User> findUserByEmail(String email);
}
