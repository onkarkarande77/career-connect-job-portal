package com.onkar.jobportal.controller;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ChangePasswordRequest;
import com.onkar.jobportal.dto.ProfileResponse;
import com.onkar.jobportal.dto.UpdateProfileRequest;
import com.onkar.jobportal.service.ProfileService;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin("*")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{userId}")
    public ProfileResponse getProfile(@PathVariable Long userId) {
        return profileService.getProfile(userId);
    }

    @PutMapping("/{userId}")
    public ProfileResponse updateProfile(
            @PathVariable Long userId,
            @RequestBody UpdateProfileRequest request) {

        return profileService.updateProfile(userId, request);
    }
    
    @PutMapping("/{userId}/change-password")
    public ApiResponse changePassword(
            @PathVariable Long userId,
            @RequestBody ChangePasswordRequest request) {

        return profileService.changePassword(userId, request);
    }

}