package com.plortal.plortal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (!isEmailValid(user.getEmail())) {
            throw new IllegalStateException("Email " + user.getEmail() + " does not meet the requirements");
        }
        if (!isPasswordValid(user.getPassword())) {
            throw new IllegalStateException("Password " + user.getPassword() + " does not meet the requirements");
        }
        if (userOptional.isPresent()) {
            throw new IllegalStateException("Email " + user.getEmail() + " is taken");
        }
        userRepository.save(user);
    }

    public boolean isUserRegister(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        return isPasswordCorrect(userOptional, user);
    }

    private boolean isPasswordCorrect(Optional<User> userOptional, User user) {
        return userOptional.isPresent() && userOptional.get().getPassword().equals(user.getPassword());
    }

    private boolean isEmailValid(String email) {
        return EmailValidator.validateEmail(email);
    }

    private boolean isPasswordValid(String password) {
        return PasswordValidator.validatePassword(password);
    }
}

