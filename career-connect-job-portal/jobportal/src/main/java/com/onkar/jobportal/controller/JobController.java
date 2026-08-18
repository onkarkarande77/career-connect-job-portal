package com.onkar.jobportal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.JobRequest;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.service.JobService;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin("*")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    // Add Job
    @PostMapping
    public ApiResponse addJob(@RequestBody JobRequest request) {
        return jobService.addJob(request);
    }

    // Get All Jobs
    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    // Get Job By Id
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    // Update Job
    @PutMapping("/{id}")
    public ApiResponse updateJob(@PathVariable Long id,
                                 @RequestBody JobRequest request) {

        return jobService.updateJob(id, request);
    }

    // Delete Job
    @DeleteMapping("/{id}")
    public ApiResponse deleteJob(@PathVariable Long id) {
        return jobService.deleteJob(id);
    }

    // Search by Title
    @GetMapping("/search")
    public List<Job> searchJobs(@RequestParam String keyword) {
        return jobService.searchJobs(keyword);
    }

    // Filter by Location
    @GetMapping("/location/{location}")
    public List<Job> getJobsByLocation(@PathVariable String location) {
        return jobService.getJobsByLocation(location);
    }

    // Filter by Job Type
    @GetMapping("/type/{jobType}")
    public List<Job> getJobsByJobType(@PathVariable String jobType) {
        return jobService.getJobsByJobType(jobType);
    }

    // Filter by Experience
    @GetMapping("/experience/{experience}")
    public List<Job> getJobsByExperience(@PathVariable String experience) {
        return jobService.getJobsByExperience(experience);
    }

}