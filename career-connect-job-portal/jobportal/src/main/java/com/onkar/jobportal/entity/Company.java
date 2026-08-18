package com.onkar.jobportal.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String companyName;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String website;

    private String location;

    private String logo;

    private LocalDateTime createdAt;
    
    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private User recruiter;
    
    

    public Company(Long id, String companyName, String description, String website, String location, String logo,
			LocalDateTime createdAt, User recruiter) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.description = description;
		this.website = website;
		this.location = location;
		this.logo = logo;
		this.createdAt = createdAt;
		this.recruiter = recruiter;
	}

	public Company() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	public User getRecruiter() {
	    return recruiter;
	}

	public void setRecruiter(User recruiter) {
	    this.recruiter = recruiter;
	}

    // Generate Getters & Setters
    
}