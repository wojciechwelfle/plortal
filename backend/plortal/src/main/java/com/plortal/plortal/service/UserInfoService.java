package com.plortal.plortal.service;

import com.plortal.plortal.model.entity.User;

import java.util.Optional;

public interface UserInfoService {
    void updateBasicInfo(Long userId, String basicInfo);

    void updateAdditionalInfo(Long userId, String additionalInfo);

    String getBasicInfo(Long userId);

    String getAdditionalInfo(Long userId);
}
