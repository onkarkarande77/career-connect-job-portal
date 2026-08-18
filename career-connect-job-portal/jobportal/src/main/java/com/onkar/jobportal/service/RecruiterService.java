package com.onkar.jobportal.service;

import com.onkar.jobportal.dto.RecruiterDashboardResponse;

public interface RecruiterService {

    RecruiterDashboardResponse getDashboard(Long recruiterId);

}