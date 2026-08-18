package com.onkar.jobportal.service;

import java.util.List;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ApplicationRequest;
import com.onkar.jobportal.entity.JobApplication;

public interface ApplicationService {

    ApiResponse applyJob(ApplicationRequest request);

    List<JobApplication> getApplicationsByUser(Long userId);

    List<JobApplication> getApplicationsByJob(Long jobId);

    // Recruiter Applications
    List<JobApplication> getApplicationsForRecruiter(Long recruiterId);

    ApiResponse updateStatus(Long applicationId, String status);

	List<JobApplication> getApplicationsForCompany(Long companyId);

}