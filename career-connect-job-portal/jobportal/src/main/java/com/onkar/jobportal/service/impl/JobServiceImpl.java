package com.onkar.jobportal.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.JobRequest;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.repository.CompanyRepository;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.service.JobService;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;
    private final CompanyRepository companyRepository;

    public JobServiceImpl(JobRepository jobRepository,
                          CompanyRepository companyRepository) {

        this.jobRepository = jobRepository;
        this.companyRepository = companyRepository;
    }

    @Override
    public ApiResponse addJob(JobRequest request) {

        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company Not Found"));

        Job job = new Job();

        job.setTitle(request.getTitle());
        job.setDescription(request.getDescription());
        job.setLocation(request.getLocation());
        job.setSalary(request.getSalary());
        job.setExperience(request.getExperience());
        job.setJobType(request.getJobType());
        job.setSkills(request.getSkills());
        job.setCreatedAt(LocalDateTime.now());
        job.setCompany(company);

        jobRepository.save(job);

        return new ApiResponse(true, "Job Posted Successfully");
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJobById(Long id) {

        return jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job Not Found"));
    }

    @Override
    public ApiResponse updateJob(Long id, JobRequest request) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job Not Found"));

        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company Not Found"));

        job.setTitle(request.getTitle());
        job.setDescription(request.getDescription());
        job.setLocation(request.getLocation());
        job.setSalary(request.getSalary());
        job.setExperience(request.getExperience());
        job.setJobType(request.getJobType());
        job.setSkills(request.getSkills());
        job.setCompany(company);

        jobRepository.save(job);

        return new ApiResponse(true, "Job Updated Successfully");
    }

    @Override
    public ApiResponse deleteJob(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job Not Found"));

        jobRepository.delete(job);

        return new ApiResponse(true, "Job Deleted Successfully");
    }

    @Override
    public List<Job> searchJobs(String keyword) {
        return jobRepository.findByTitleContainingIgnoreCase(keyword);
    }

    @Override
    public List<Job> getJobsByLocation(String location) {
        return jobRepository.findByLocation(location);
    }

    @Override
    public List<Job> getJobsByJobType(String jobType) {
        return jobRepository.findByJobType(jobType);
    }

    @Override
    public List<Job> getJobsByExperience(String experience) {
        return jobRepository.findByExperience(experience);
    }

}