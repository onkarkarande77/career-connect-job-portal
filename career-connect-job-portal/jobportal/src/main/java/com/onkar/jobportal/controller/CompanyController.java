package com.onkar.jobportal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.CompanyRequest;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.service.CompanyService;

@RestController
@RequestMapping("/api/company")
@CrossOrigin("*")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping("/{recruiterId}")
    public ApiResponse addCompany(
            @PathVariable Long recruiterId,
            @RequestBody CompanyRequest request) {

        return companyService.addCompany(recruiterId, request);

    }

    @GetMapping
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{id}")
    public Company getCompany(@PathVariable Long id) {
        return companyService.getCompanyById(id);
    }

    @PutMapping("/{id}")
    public ApiResponse updateCompany(@PathVariable Long id,
                                     @RequestBody CompanyRequest request) {
        return companyService.updateCompany(id, request);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteCompany(@PathVariable Long id) {
        return companyService.deleteCompany(id);
    }

}