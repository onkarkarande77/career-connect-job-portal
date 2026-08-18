package com.onkar.jobportal.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.AdminDashboardResponse;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.ApplicationRepository;
import com.onkar.jobportal.repository.CompanyRepository;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final JobRepository jobRepository;
    private final ApplicationRepository applicationRepository;
    
    public AdminServiceImpl(UserRepository userRepository,
            CompanyRepository companyRepository,
            JobRepository jobRepository,
            ApplicationRepository applicationRepository) {

          this.userRepository = userRepository;
          this.companyRepository = companyRepository;
          this.jobRepository = jobRepository;
          this.applicationRepository = applicationRepository;
         }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    @Override
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
    @Override
    public AdminDashboardResponse getDashboardStats() {

        return new AdminDashboardResponse(

                userRepository.count(),

                companyRepository.count(),

                jobRepository.count(),

                applicationRepository.count()

        );
    }
}