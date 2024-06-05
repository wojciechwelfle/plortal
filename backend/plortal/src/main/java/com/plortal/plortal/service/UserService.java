package com.plortal.plortal.service;

import com.plortal.plortal.model.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getUsers();

    void registerStudent(User user);

    void authenticateUser(String email, String password);

    void authenticateAdmin(String email, String password);

    Optional<User> findUserByEmail(String email);

    void deleteUser(Long id);

    void changePassword(Long userId, String oldPassword, String newPassword);

    void updateBasicInfo(Long userId, String basicInfo);

    void updateAdditionalInfo(Long userId, String additionalInfo);
}
