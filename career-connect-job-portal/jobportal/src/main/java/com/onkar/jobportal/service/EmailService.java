package com.onkar.jobportal.service;

public interface EmailService {

    void sendEmail(
            String to,
            String subject,
            String body
    );
}