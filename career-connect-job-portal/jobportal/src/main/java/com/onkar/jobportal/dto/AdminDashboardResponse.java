package com.onkar.jobportal.dto;

public class AdminDashboardResponse {

    private long totalUsers;
    private long totalCompanies;
    private long totalJobs;
    private long totalApplications;

    public AdminDashboardResponse() {
    }

    public AdminDashboardResponse(long totalUsers,
                                  long totalCompanies,
                                  long totalJobs,
                                  long totalApplications) {
        this.totalUsers = totalUsers;
        this.totalCompanies = totalCompanies;
        this.totalJobs = totalJobs;
        this.totalApplications = totalApplications;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalCompanies() {
        return totalCompanies;
    }

    public void setTotalCompanies(long totalCompanies) {
        this.totalCompanies = totalCompanies;
    }

    public long getTotalJobs() {
        return totalJobs;
    }

    public void setTotalJobs(long totalJobs) {
        this.totalJobs = totalJobs;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }
}
