package com.plortal.plortal.service;

import com.plortal.plortal.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    void registerStudent(User user);

    void authenticateUser(String email, String password);
}
