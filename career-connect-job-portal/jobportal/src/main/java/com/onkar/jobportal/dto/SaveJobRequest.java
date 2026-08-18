package com.onkar.jobportal.dto;

public class SaveJobRequest {

    private Long userId;
    private Long jobId;

    public SaveJobRequest() {
    }

    public SaveJobRequest(Long userId, Long jobId) {
        this.userId = userId;
        this.jobId = jobId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }
}