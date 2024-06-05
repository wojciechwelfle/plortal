package com.plortal.plortal.service.impl;

import com.plortal.plortal.exception.*;
import com.plortal.plortal.model.entity.User;
import com.plortal.plortal.model.enums.UserRole;
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
    public void registerStudent(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new EmailTakenException();
        }
        if (!isEmailValid(user.getEmail())) {
            throw new EmailInvalidException();
        }
        if (isPasswordInvalid(user.getPassword())) {
            throw new PasswordInvalidException();
        }
        if (!user.getRole().equals(UserRole.TEACHER)) {
            user.setRole(UserRole.STUDENT);
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

    @Override
    public void authenticateAdmin(String email, String password) {
        authenticateUser(email, password);
        Optional<User> user = userRepository.findUserByEmail(email);
        if (user.isEmpty() || user.get().getRole() != UserRole.ADMIN) {
            throw new UserIsNotAdminException();
        }
    }

    @Override
    public Optional<User> findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
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

    private boolean isPasswordInvalid(String password) {
        return !PasswordValidator.validatePassword(password);
    }

    @Override
    public void changePassword(Long userId, String oldPassword, String newPassword) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (!user.getPassword().equals(oldPassword)) {
                throw new IncorrectPasswordException();
            }
            if (isPasswordInvalid(newPassword)) {
                throw new PasswordInvalidException();
            }
            user.setPassword(newPassword);
            userRepository.save(user);
        } else {
            throw new UserNotExistException();
        }
    }

    @Override
    public void updateBasicInfo(Long userId, String basicInfo) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setBasicInfo(basicInfo);
            userRepository.save(user);
        } else {
            throw new UserNotExistException();
        }
    }

    @Override
    public void updateAdditionalInfo(Long userId, String additionalInfo) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setAdditionalInfo(additionalInfo);
            userRepository.save(user);
        } else {
            throw new UserNotExistException();
        }
    }
}
