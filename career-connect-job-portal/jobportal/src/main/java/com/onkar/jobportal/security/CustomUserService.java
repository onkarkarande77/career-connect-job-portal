package com.onkar.jobportal.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.UserRepository;


@Service
public class CustomUserService {


    private final UserRepository userRepository;


    public CustomUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    public User getLoggedInUser(){


        String email =
                SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();


        return userRepository.findByEmail(email)
                .orElseThrow(
                    () -> new RuntimeException("User not found")
                );

    }

}