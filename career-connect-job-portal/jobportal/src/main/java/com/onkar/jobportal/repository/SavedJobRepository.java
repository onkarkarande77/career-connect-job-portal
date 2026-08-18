package com.onkar.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onkar.jobportal.entity.SavedJob;

public interface SavedJobRepository extends JpaRepository<SavedJob, Long> {

    List<SavedJob> findByUserId(Long userId);

    boolean existsByUserIdAndJobId(Long userId, Long jobId);
}