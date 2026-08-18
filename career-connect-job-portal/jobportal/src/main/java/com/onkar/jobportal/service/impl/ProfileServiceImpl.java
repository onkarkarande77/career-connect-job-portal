package com.onkar.jobportal.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ChangePasswordRequest;
import com.onkar.jobportal.dto.ProfileResponse;
import com.onkar.jobportal.dto.UpdateProfileRequest;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.ProfileService;

@Service
public class ProfileServiceImpl  implements ProfileService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

     

    public ProfileServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
    public ProfileResponse getProfile(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        return new ProfileResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                user.getRole().name()
        );
    }

    @Override
    public ProfileResponse updateProfile(Long userId,
                                         UpdateProfileRequest request) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());

        userRepository.save(user);

        return new ProfileResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                user.getRole().name()
        );
    } 
    @Override
    public ApiResponse changePassword(Long userId,
                                      ChangePasswordRequest request) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        if (!passwordEncoder.matches(
                request.getOldPassword(),
                user.getPassword())) {

            return new ApiResponse(false,
                    "Old Password is Incorrect");
        }

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword()));

        userRepository.save(user);

        return new ApiResponse(true,
                "Password Changed Successfully");
    }

}