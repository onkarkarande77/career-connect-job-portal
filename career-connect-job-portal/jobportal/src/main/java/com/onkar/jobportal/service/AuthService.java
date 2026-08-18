package com.onkar.jobportal.service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.LoginRequest;
import com.onkar.jobportal.dto.RecruiterRegisterRequest;
import com.onkar.jobportal.dto.RegisterRequest;

public interface AuthService {

    ApiResponse register(RegisterRequest request);

    ApiResponse login(LoginRequest request);
    
    ApiResponse recruiterRegister(
            RecruiterRegisterRequest request
    );
}