package com.onkar.jobportal.service.impl;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.DashboardResponse;
import com.onkar.jobportal.repository.ApplicationRepository;
import com.onkar.jobportal.repository.CompanyRepository;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;

    public DashboardServiceImpl(UserRepository userRepository,
                                CompanyRepository companyRepository,
                                JobRepository jobRepository,
                                ApplicationRepository applicationRepository) {

        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.jobRepository = jobRepository;
        this.applicationRepository = applicationRepository;
    }

    @Override
    public DashboardResponse getDashboard() {

        long users = userRepository.count();
        long companies = companyRepository.count();
        long jobs = jobRepository.count();
        long applications = applicationRepository.count();

        return new DashboardResponse(
                users,
                companies,
                jobs,
                applications
        );
    }

}