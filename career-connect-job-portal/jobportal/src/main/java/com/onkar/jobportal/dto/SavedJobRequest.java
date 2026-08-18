package com.onkar.jobportal.dto;

public class SavedJobRequest {

    private Long userId;
    private Long jobId;

    public SavedJobRequest() {
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