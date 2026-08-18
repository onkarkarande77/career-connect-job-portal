package com.onkar.jobportal.controller;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.LoginRequest;
import com.onkar.jobportal.dto.RecruiterRegisterRequest;
import com.onkar.jobportal.dto.RegisterRequest;
import com.onkar.jobportal.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ApiResponse register(@RequestBody RegisterRequest request) {
          	return authService.register(request);
        
    }

    @PostMapping("/login")
    public ApiResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
    
    @PostMapping("/recruiter-register")
    public ApiResponse recruiterRegister(
            @RequestBody RecruiterRegisterRequest request) {

        return authService.recruiterRegister(request);
    }
}