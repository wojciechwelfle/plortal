package com.plortal.plortal.service;

import com.plortal.plortal.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    void addNewUser(User user);

    void authenticateUser(String email, String password);
}
