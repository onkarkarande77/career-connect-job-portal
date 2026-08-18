package com.onkar.jobportal.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.ResumeService;

@Service
public class ResumeServiceImpl implements ResumeService {

    @Value("${upload.path}")
    private String uploadPath;

    private final UserRepository userRepository;

    public ResumeServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ApiResponse uploadResume(Long userId, MultipartFile file) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (file.isEmpty()) {
            return new ApiResponse(false, "Please select a file");
        }

        if (!file.getOriginalFilename().toLowerCase().endsWith(".pdf")) {
            return new ApiResponse(false, "Only PDF files are allowed");
        }

        try {

            Path uploadDir = Paths.get(uploadPath);

            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }

            String fileName = userId + "_" + file.getOriginalFilename();

            Path filePath = uploadDir.resolve(fileName);

            Files.copy(file.getInputStream(),
                    filePath,
                    StandardCopyOption.REPLACE_EXISTING);

            user.setResume(fileName);

            userRepository.save(user);

            return new ApiResponse(true, "Resume uploaded successfully");

        } catch (IOException e) {

            return new ApiResponse(false, e.getMessage());

        }

    }

    @Override
    public Resource downloadResume(Long userId) {

        try {

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            Path path = Paths.get(uploadPath)
                    .resolve(user.getResume());

            Resource resource = new UrlResource(path.toUri());

            if (resource.exists()) {
                return resource;
            }

            throw new RuntimeException("Resume not found");

        } catch (Exception e) {

            throw new RuntimeException(e.getMessage());

        }
    }
}