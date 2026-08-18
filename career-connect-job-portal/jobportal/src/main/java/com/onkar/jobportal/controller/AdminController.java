package com.onkar.jobportal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.AdminDashboardResponse;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // ================= Dashboard =================

    @GetMapping("/dashboard")
    public AdminDashboardResponse dashboard() {
        return adminService.getDashboardStats();
    }

    // ================= Users =================

    @GetMapping("/users")
    public List<User> getUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {

        adminService.deleteUser(id);

        return "User Deleted Successfully";
    }

    // ================= Companies =================

    @GetMapping("/companies")
    public List<Company> getCompanies() {
        return adminService.getAllCompanies();
    }

    @DeleteMapping("/company/{id}")
    public String deleteCompany(@PathVariable Long id) {

        adminService.deleteCompany(id);

        return "Company Deleted Successfully";
    }

    // ================= Jobs =================

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return adminService.getAllJobs();
    }

    @DeleteMapping("/job/{id}")
    public String deleteJob(@PathVariable Long id) {

        adminService.deleteJob(id);

        return "Job Deleted Successfully";
    }

}