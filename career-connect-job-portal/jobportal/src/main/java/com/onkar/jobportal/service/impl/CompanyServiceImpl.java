package com.onkar.jobportal.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.CompanyRequest;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.CompanyRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    
    private final UserRepository userRepository;

     

    public CompanyServiceImpl(CompanyRepository companyRepository, UserRepository userRepository) {
		super();
		this.companyRepository = companyRepository;
		this.userRepository = userRepository;
	}

    @Override
    public ApiResponse addCompany(
            Long recruiterId,
            CompanyRequest request) {

        // Find Recruiter
        User recruiter = userRepository.findById(recruiterId)
                .orElseThrow(() ->
                        new RuntimeException("Recruiter Not Found"));

        // Create Company
        Company company = new Company();

        company.setCompanyName(request.getCompanyName());
        company.setDescription(request.getDescription());
        company.setWebsite(request.getWebsite());
        company.setLocation(request.getLocation());
        company.setLogo(request.getLogo());
        company.setCreatedAt(LocalDateTime.now());

        // Assign Recruiter
        company.setRecruiter(recruiter);

        // Save Company
        companyRepository.save(company);

        return new ApiResponse(
                true,
                "Company Added Successfully"
        );
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(Long id) {

        return companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company Not Found"));
    }

    @Override
    public ApiResponse updateCompany(Long id, CompanyRequest request) {

        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company Not Found"));

        company.setCompanyName(request.getCompanyName());
        company.setDescription(request.getDescription());
        company.setWebsite(request.getWebsite());
        company.setLocation(request.getLocation());
        company.setLogo(request.getLogo());

        companyRepository.save(company);

        return new ApiResponse(true, "Company Updated Successfully");
    }

    @Override
    public ApiResponse deleteCompany(Long id) {

        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company Not Found"));

        companyRepository.delete(company);

        return new ApiResponse(true, "Company Deleted Successfully");
    }

}