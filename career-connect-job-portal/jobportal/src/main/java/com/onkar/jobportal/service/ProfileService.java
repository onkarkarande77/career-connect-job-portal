package com.onkar.jobportal.service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ChangePasswordRequest;
import com.onkar.jobportal.dto.ProfileResponse;
import com.onkar.jobportal.dto.UpdateProfileRequest;

public interface ProfileService {

    ProfileResponse getProfile(Long userId);

    ProfileResponse updateProfile(Long userId,
                                  UpdateProfileRequest request);

    ApiResponse changePassword(Long userId,
                               ChangePasswordRequest request);

}