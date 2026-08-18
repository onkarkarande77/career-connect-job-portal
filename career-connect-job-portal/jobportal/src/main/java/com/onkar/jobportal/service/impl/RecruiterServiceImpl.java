package com.onkar.jobportal.service.impl;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.RecruiterDashboardResponse;
import com.onkar.jobportal.repository.ApplicationRepository;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.service.RecruiterService;

@Service
public class RecruiterServiceImpl implements RecruiterService {

    private final JobRepository jobRepository;

    private final ApplicationRepository applicationRepository;

    public RecruiterServiceImpl(
            JobRepository jobRepository,
            ApplicationRepository applicationRepository) {

        this.jobRepository = jobRepository;
        this.applicationRepository = applicationRepository;
    }
    
    

    @Override
    public RecruiterDashboardResponse getDashboard(Long recruiterId) {

    	Long totalJobs =
    	        jobRepository.countByCompanyRecruiterId(recruiterId);

        Long totalApplications =
                applicationRepository.countByRecruiterId(recruiterId);

        Long pendingApplications =
                applicationRepository.countPendingByRecruiterId(recruiterId);

        return new RecruiterDashboardResponse(

                totalJobs,

                totalApplications,

                pendingApplications

        );

    }

}