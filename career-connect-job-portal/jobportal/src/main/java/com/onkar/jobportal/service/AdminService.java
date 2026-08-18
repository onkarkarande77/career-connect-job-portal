package com.onkar.jobportal.service;

import java.util.List;

import com.onkar.jobportal.dto.AdminDashboardResponse;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.entity.User;

public interface AdminService {

    List<User> getAllUsers();

    List<Company> getAllCompanies();

    List<Job> getAllJobs();

    void deleteUser(Long id);

    void deleteCompany(Long id);

    void deleteJob(Long id);
    
    AdminDashboardResponse getDashboardStats();
}