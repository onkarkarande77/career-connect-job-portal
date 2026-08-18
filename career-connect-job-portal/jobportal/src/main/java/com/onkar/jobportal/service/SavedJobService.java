package com.onkar.jobportal.service;

import java.util.List;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.SavedJobRequest;
import com.onkar.jobportal.entity.SavedJob;

public interface SavedJobService {

    ApiResponse saveJob(SavedJobRequest request);

    List<SavedJob> getSavedJobsByUser(Long userId);

    ApiResponse removeSavedJob(Long savedJobId);
}