package com.onkar.jobportal.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.onkar.jobportal.dto.ApiResponse;

public interface ResumeService {

    ApiResponse uploadResume(Long userId, MultipartFile file);

    Resource downloadResume(Long userId);

}