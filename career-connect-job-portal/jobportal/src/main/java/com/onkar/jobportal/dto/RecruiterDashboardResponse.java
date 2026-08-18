package com.onkar.jobportal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecruiterDashboardResponse {

    private Long totalJobs;

    private Long totalApplications;

    private Long pendingApplications;
    
    
    

	public RecruiterDashboardResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RecruiterDashboardResponse(Long totalJobs, Long totalApplications, Long pendingApplications) {
		super();
		this.totalJobs = totalJobs;
		this.totalApplications = totalApplications;
		this.pendingApplications = pendingApplications;
	}

	public Long getTotalJobs() {
		return totalJobs;
	}

	public void setTotalJobs(Long totalJobs) {
		this.totalJobs = totalJobs;
	}

	public Long getTotalApplications() {
		return totalApplications;
	}

	public void setTotalApplications(Long totalApplications) {
		this.totalApplications = totalApplications;
	}

	public Long getPendingApplications() {
		return pendingApplications;
	}

	public void setPendingApplications(Long pendingApplications) {
		this.pendingApplications = pendingApplications;
	}

    
}