package com.onkar.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onkar.jobportal.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByLocation(String location);

    List<Job> findByJobType(String jobType);

    List<Job> findByExperience(String experience);

    List<Job> findByTitleContainingIgnoreCase(String keyword);

    // One company -> Many jobs
    List<Job> findByCompanyId(Long companyId);

    List<Job> findAllByCompanyId(Long companyId);

    // All jobs of a recruiter
    List<Job> findByCompanyRecruiterId(Long recruiterId);

    // Total jobs posted by a recruiter
    Long countByCompanyRecruiterId(Long recruiterId);

}