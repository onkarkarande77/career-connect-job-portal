package com.onkar.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.onkar.jobportal.entity.ApplicationStatus;
import com.onkar.jobportal.entity.JobApplication;

public interface ApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    List<JobApplication> findByApplicantId(Long applicantId);

    List<JobApplication> findByJobId(Long jobId);

    boolean existsByApplicantIdAndJobId(
            Long applicantId,
            Long jobId);

    // Total applications received by recruiter's jobs
    @Query("""
            SELECT COUNT(a)
            FROM JobApplication a
            WHERE a.job.company.recruiter.id = :recruiterId
            """)
    Long countByRecruiterId(Long recruiterId);

    // Pending applications
    @Query("""
            SELECT COUNT(a)
            FROM JobApplication a
            WHERE a.job.company.recruiter.id = :recruiterId
            AND a.status = com.onkar.jobportal.entity.ApplicationStatus.APPLIED
            """)
    Long countPendingByRecruiterId(Long recruiterId);

}