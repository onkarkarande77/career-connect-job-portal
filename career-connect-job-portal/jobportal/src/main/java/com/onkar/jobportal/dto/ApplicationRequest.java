package com.onkar.jobportal.dto;

public class ApplicationRequest {

    private Long applicantId;
    private Long jobId;

    public ApplicationRequest() {
    }

    public ApplicationRequest(Long applicantId, Long jobId) {
        this.applicantId = applicantId;
        this.jobId = jobId;
    }

    public Long getApplicantId() {
        return applicantId;
    }

    public void setApplicantId(Long applicantId) {
        this.applicantId = applicantId;
    }

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }
}