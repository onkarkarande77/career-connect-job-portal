package com.onkar.jobportal.controller;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.RecruiterDashboardResponse;
import com.onkar.jobportal.service.RecruiterService;

@RestController
@RequestMapping("/api/recruiter")
@CrossOrigin("*")
public class RecruiterController {

    private final RecruiterService recruiterService;

    public RecruiterController(
            RecruiterService recruiterService) {

        this.recruiterService = recruiterService;

    }

    @GetMapping("/dashboard/{recruiterId}")
    public RecruiterDashboardResponse dashboard(

            @PathVariable Long recruiterId) {

        return recruiterService.getDashboard(recruiterId);

    }

}