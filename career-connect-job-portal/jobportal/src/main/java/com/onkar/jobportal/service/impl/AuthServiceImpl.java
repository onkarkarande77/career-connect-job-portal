package com.onkar.jobportal.service.impl;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.onkar.jobportal.dto.ApiResponse;
import com.onkar.jobportal.dto.LoginRequest;
import com.onkar.jobportal.dto.RecruiterRegisterRequest;
import com.onkar.jobportal.dto.RegisterRequest;
import com.onkar.jobportal.entity.Company;
import com.onkar.jobportal.entity.Role;
import com.onkar.jobportal.entity.User;
import com.onkar.jobportal.repository.CompanyRepository;
import com.onkar.jobportal.repository.UserRepository;
import com.onkar.jobportal.security.JwtService;
import com.onkar.jobportal.service.AuthService;
import com.onkar.jobportal.service.EmailService;

@Service
public class AuthServiceImpl implements AuthService {

  
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailService emailService;
    private final CompanyRepository companyRepository;
    
    
     
    
    
    

	public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
			EmailService emailService, CompanyRepository companyRepository) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.emailService = emailService;
		this.companyRepository = companyRepository;
	}

	@Override
    public ApiResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return new ApiResponse(false, "User not found");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new ApiResponse(false, "Invalid Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        user.setPassword(null);

        return new ApiResponse(
                true,
                "Login Successful",
                token,
                user
        );
    }

    @Override
    public ApiResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new ApiResponse(false, "Email already exists");
        }

        User user = new User();
         

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setRole(request.getRole());
        user.setCreatedAt(LocalDateTime.now());

        userRepository.save(user);
        
        emailService.sendEmail(
                user.getEmail(),
                "Welcome to Career Connect",
                "Hello "
                + user.getFirstName()
                + ",\n\nYour account has been created successfully."
        );

        return new ApiResponse(true, "Registration Successful");
    }
    
    @Override
    public ApiResponse recruiterRegister(
            RecruiterRegisterRequest request) {

        // Check Email
        if (userRepository.existsByEmail(request.getEmail())) {

            return new ApiResponse(
                    false,
                    "Email already exists"
            );
        }

        // Create Recruiter
        User recruiter = new User();

        recruiter.setFirstName(request.getFirstName());
        recruiter.setLastName(request.getLastName());
        recruiter.setEmail(request.getEmail());
        recruiter.setPassword(
                passwordEncoder.encode(request.getPassword()));
        recruiter.setPhone(request.getPhone());
        recruiter.setRole(Role.RECRUITER);
        recruiter.setCreatedAt(LocalDateTime.now());

        User savedRecruiter = userRepository.save(recruiter);

        // Create Company
        Company company = new Company();

        company.setCompanyName(request.getCompanyName());
        company.setDescription(request.getDescription());
        company.setWebsite(request.getWebsite());
        company.setLocation(request.getLocation());
        company.setLogo(request.getLogo());

        company.setRecruiter(savedRecruiter);
        company.setCreatedAt(LocalDateTime.now());

        companyRepository.save(company);

        // Welcome Email
        emailService.sendEmail(
                recruiter.getEmail(),
                "Welcome to CareerConnect",
                "Hello " + recruiter.getFirstName()
                        + ",\n\n"
                        + "Your recruiter account has been created successfully.\n\n"
                        + "Company : " + company.getCompanyName()
                        + "\n\nWelcome to CareerConnect!"
        );

        return new ApiResponse(
                true,
                "Recruiter Registered Successfully"
        );
    }
     
}
