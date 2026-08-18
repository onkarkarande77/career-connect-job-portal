package com.onkar.jobportal.service.impl;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.ApplicationRequest;
import com.onkar.jobportal.entity.ApplicationStatus;
import com.onkar.jobportal.entity.Job;
import com.onkar.jobportal.entity.JobApplication;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.ApplicationRepository;
import com.onkar.jobportal.repository.JobRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.ApplicationService;
import com.onkar.jobportal.service.EmailService;


@Service
public class ApplicationServiceImpl implements ApplicationService {


    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;
    private final JobRepository jobRepository;
    private final EmailService emailService;



    public ApplicationServiceImpl(
            ApplicationRepository applicationRepository,
            UserRepository userRepository,
            JobRepository jobRepository,
            EmailService emailService) {

        this.applicationRepository = applicationRepository;
        this.userRepository = userRepository;
        this.jobRepository = jobRepository;
        this.emailService = emailService;
    }



    @Override
    public ApiResponse applyJob(ApplicationRequest request) {


        User applicant = userRepository
                .findById(request.getApplicantId())
                .orElse(null);



        if(applicant == null) {

            return new ApiResponse(
                    false,
                    "Applicant not found"
            );
        }



        Job job = jobRepository
                .findById(request.getJobId())
                .orElse(null);



        if(job == null) {

            return new ApiResponse(
                    false,
                    "Job not found"
            );
        }



        if(applicationRepository.existsByApplicantIdAndJobId(
                applicant.getId(),
                job.getId())) {


            return new ApiResponse(
                    false,
                    "You have already applied for this job"
            );
        }



        JobApplication application = new JobApplication();


        application.setApplicant(applicant);
        application.setJob(job);
        application.setAppliedAt(LocalDateTime.now());
        application.setStatus(ApplicationStatus.APPLIED);



        applicationRepository.save(application);



        // Email notification to applicant

        emailService.sendEmail(
                applicant.getEmail(),
                "Job Application Submitted",
                "Hello "
                + applicant.getFirstName()
                + ",\n\nYour application for "
                + job.getTitle()
                + " has been submitted successfully."
                + "\n\nThank you."
        );



        return new ApiResponse(
                true,
                "Job Applied Successfully"
        );
    }




    @Override
    public List<JobApplication> getApplicationsByUser(Long userId) {

        return applicationRepository.findByApplicantId(userId);
    }




    @Override
    public List<JobApplication> getApplicationsByJob(Long jobId) {

        return applicationRepository.findByJobId(jobId);
    }





    @Override
    public ApiResponse updateStatus(
            Long applicationId,
            String status) {



        JobApplication application = applicationRepository
                .findById(applicationId)
                .orElse(null);



        if(application == null) {

            return new ApiResponse(
                    false,
                    "Application not found"
            );
        }




        try {


            application.setStatus(
                    ApplicationStatus.valueOf(
                            status.toUpperCase()
                    )
            );


        } catch (IllegalArgumentException e) {


            return new ApiResponse(
                    false,
                    "Invalid Status"
            );
        }





        applicationRepository.save(application);




        // Email notification after status update

        emailService.sendEmail(

                application.getApplicant().getEmail(),

                "Application Status Updated",

                "Hello "
                + application.getApplicant().getFirstName()
                + ",\n\nYour application status for "
                + application.getJob().getTitle()
                + " is now "
                + application.getStatus()
                + ".\n\nThank you."
        );





        return new ApiResponse(
                true,
                "Application Status Updated"
        );
    }






    @Override
    public List<JobApplication> getApplicationsForCompany(Long companyId) {


        List<Job> jobs =
                jobRepository.findAllByCompanyId(companyId);



        List<JobApplication> applications =
                new ArrayList<>();




        for(Job job : jobs) {


            applications.addAll(
                    applicationRepository.findByJobId(job.getId())
            );
        }



        return applications;
    }



    @Override
    public List<JobApplication> getApplicationsForRecruiter(Long recruiterId) {

        List<Job> jobs =
                jobRepository.findByCompanyRecruiterId(recruiterId);

        List<JobApplication> applications =
                new ArrayList<>();

        for (Job job : jobs) {

            applications.addAll(
                    applicationRepository.findByJobId(job.getId())
            );

        }

        return applications;
    }

}