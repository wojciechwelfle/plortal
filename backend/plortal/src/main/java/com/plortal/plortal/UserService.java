package com.plortal.plortal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        // todo - add new User
    }

}
