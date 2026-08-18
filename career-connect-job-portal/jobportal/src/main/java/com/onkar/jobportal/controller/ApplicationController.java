package com.onkar.jobportal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ApplicationRequest;
import com.onkar.jobportal.entity.JobApplication;
import com.onkar.jobportal.service.ApplicationService;


@RestController
@RequestMapping("/api/application")
@CrossOrigin("*")
public class ApplicationController {


    private final ApplicationService applicationService;


    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/apply")
    public ApiResponse applyJob(
            @RequestBody ApplicationRequest request) {

        return applicationService.applyJob(request);
    }



    @GetMapping("/user/{userId}")
    public List<JobApplication> getApplicationsByUser(
            @PathVariable Long userId) {

        return applicationService.getApplicationsByUser(userId);
    }



    @GetMapping("/job/{jobId}")
    public List<JobApplication> getApplicationsByJob(
            @PathVariable Long jobId) {

        return applicationService.getApplicationsByJob(jobId);
    }



    @PutMapping("/{applicationId}/status")
    public ApiResponse updateStatus(
            @PathVariable Long applicationId,
            @RequestParam String status) {


        return applicationService.updateStatus(
                applicationId,
                status
        );
    }



    @GetMapping("/recruiter/{recruiterId}")
    public List<JobApplication> getApplicationsForRecruiter(
            @PathVariable Long recruiterId) {

        return applicationService.getApplicationsForRecruiter(recruiterId);
    }

}