package com.onkar.jobportal.service;

import java.util.List;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.JobRequest;
import com.onkar.jobportal.entity.Job;

public interface JobService {

    ApiResponse addJob(JobRequest request);

    List<Job> getAllJobs();

    Job getJobById(Long id);

    ApiResponse updateJob(Long id, JobRequest request);

    ApiResponse deleteJob(Long id);

    List<Job> searchJobs(String keyword);

    List<Job> getJobsByLocation(String location);

    List<Job> getJobsByJobType(String jobType);

    List<Job> getJobsByExperience(String experience);

}