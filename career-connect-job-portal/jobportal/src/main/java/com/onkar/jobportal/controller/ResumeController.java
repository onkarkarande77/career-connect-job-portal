package com.onkar.jobportal.controller;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.service.ResumeService;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin("*")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    // Upload Resume 
    @PostMapping("/upload/{userId}")
    public ApiResponse uploadResume(
            @PathVariable Long userId,
            @RequestParam("file") MultipartFile file) {

        return resumeService.uploadResume(userId, file);
    }

    // Download Resume
    @GetMapping("/download/{userId}")
    public ResponseEntity<Resource> downloadResume(
            @PathVariable Long userId) {

        Resource resource = resumeService.downloadResume(userId);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}