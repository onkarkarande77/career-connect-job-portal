package com.onkar.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onkar.jobportal.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    // Get all companies of a recruiter
    List<Company> findByRecruiterId(Long recruiterId);

    // Count companies of a recruiter
    Long countByRecruiterId(Long recruiterId);

}