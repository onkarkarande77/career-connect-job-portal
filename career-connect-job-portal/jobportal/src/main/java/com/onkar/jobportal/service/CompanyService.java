package com.onkar.jobportal.service;

import java.util.List;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.CompanyRequest;
import com.onkar.jobportal.entity.Company;

public interface CompanyService {

	ApiResponse addCompany(Long recruiterId, CompanyRequest request);

    List<Company> getAllCompanies();

    Company getCompanyById(Long id);

    ApiResponse updateCompany(Long id, CompanyRequest request);

    ApiResponse deleteCompany(Long id);

}