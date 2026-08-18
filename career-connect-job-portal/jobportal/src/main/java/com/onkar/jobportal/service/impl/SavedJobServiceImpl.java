package com.onkar.jobportal.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.SavedJobRequest;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.entity.SavedJob;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.repository.SavedJobRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.SavedJobService;

@Service
public class SavedJobServiceImpl implements SavedJobService {

    private final SavedJobRepository savedJobRepository;
    private final UserRepository userRepository;
    private final JobRepository jobRepository;

    public SavedJobServiceImpl(
            SavedJobRepository savedJobRepository,
            UserRepository userRepository,
            JobRepository jobRepository) {

        this.savedJobRepository = savedJobRepository;
        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
    }

    @Override
    public ApiResponse saveJob(SavedJobRequest request) {

        User user = userRepository.findById(request.getUserId()).orElse(null);

        if (user == null) {
            return new ApiResponse(false, "User not found");
        }

        Job job = jobRepository.findById(request.getJobId()).orElse(null);

        if (job == null) {
            return new ApiResponse(false, "Job not found");
        }

        if (savedJobRepository.existsByUserIdAndJobId(
                user.getId(),
                job.getId())) {

            return new ApiResponse(false, "Job already saved");
        }

        SavedJob savedJob = new SavedJob();

        savedJob.setUser(user);
        savedJob.setJob(job);
        savedJob.setSavedAt(LocalDateTime.now());

        savedJobRepository.save(savedJob);

        return new ApiResponse(true, "Job Saved Successfully");
    }

    @Override
    public List<SavedJob> getSavedJobsByUser(Long userId) {
        return savedJobRepository.findByUserId(userId);
    }

    @Override
    public ApiResponse removeSavedJob(Long savedJobId) {

        SavedJob savedJob = savedJobRepository.findById(savedJobId)
                .orElse(null);

        if (savedJob == null) {
            return new ApiResponse(false, "Saved Job not found");
        }

        savedJobRepository.delete(savedJob);

        return new ApiResponse(true, "Saved Job Removed Successfully");
    }
}