package com.onkar.jobportal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.SavedJobRequest;
import com.onkar.jobportal.entity.SavedJob;
import com.onkar.jobportal.service.SavedJobService;

@RestController
@RequestMapping("/api/saved")
@CrossOrigin(origins = "http://localhost:5173")
public class SavedJobController {

    private final SavedJobService savedJobService;

    public SavedJobController(SavedJobService savedJobService) {
        this.savedJobService = savedJobService;
    }

    @PostMapping
    public ApiResponse saveJob(
            @RequestBody SavedJobRequest request) {

        return savedJobService.saveJob(request);
    }

    @GetMapping("/user/{userId}")
    public List<SavedJob> getSavedJobs(
            @PathVariable Long userId) {

        return savedJobService.getSavedJobsByUser(userId);
    }

    @DeleteMapping("/{savedJobId}")
    public ApiResponse removeSavedJob(
            @PathVariable Long savedJobId) {

        return savedJobService.removeSavedJob(savedJobId);
    }
}