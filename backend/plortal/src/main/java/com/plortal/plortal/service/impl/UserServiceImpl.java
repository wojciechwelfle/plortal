package com.plortal.plortal.service.impl;

import com.plortal.plortal.exception.*;
import com.plortal.plortal.model.User;
import com.plortal.plortal.repository.UserRepository;
import com.plortal.plortal.service.UserService;
import com.plortal.plortal.validation.EmailValidator;
import com.plortal.plortal.validation.PasswordValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void addNewUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new EmailTakenException();
        }
        if (!isEmailValid(user.getEmail())) {
            throw new EmailInvalidException();
        }
        if (!isPasswordValid(user.getPassword())) {
            throw new PasswordInvalidException();
        }
        userRepository.save(user);
    }

    @Override
    public void authenticateUser(String email, String password) {
        User user = new User(email, password);
        if (!isUserPresent(user)) {
            throw new UserNotExistException();
        } else if (!isPasswordCorrectForUser(user)) {
            throw new IncorrectPasswordException();
        }
    }

    private boolean isUserPresent(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        return userOptional.isPresent();
    }

    private boolean isPasswordCorrectForUser(User user) {
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