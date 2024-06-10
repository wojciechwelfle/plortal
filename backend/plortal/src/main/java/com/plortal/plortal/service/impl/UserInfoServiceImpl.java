package com.plortal.plortal.service.impl;

import com.plortal.plortal.exception.UserNotExistException;
import com.plortal.plortal.model.entity.User;
import com.plortal.plortal.repository.UserRepository;
import com.plortal.plortal.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInfoServiceImpl implements UserInfoService {
    private final UserRepository userRepository;

    @Autowired
    public UserInfoServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
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

    @Override
    public String getBasicInfo(Long userId) throws UserNotExistException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new UserNotExistException();
        }
        return user.get().getBasicInfo();
    }

    @Override
    public String getAdditionalInfo(Long userId) throws UserNotExistException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new UserNotExistException();
        }
        return user.get().getAdditionalInfo();
    }
}
