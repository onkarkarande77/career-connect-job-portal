	package com.onkar.jobportal.security;
	
	import io.jsonwebtoken.Claims;
	import io.jsonwebtoken.Jwts;
	import io.jsonwebtoken.SignatureAlgorithm;
	import io.jsonwebtoken.security.Keys;
	import org.springframework.beans.factory.annotation.Value;
	import org.springframework.stereotype.Service;
	
	import java.security.Key;
	import java.util.Date;
	
	@Service
	public class JwtService {
	
	    @Value("${jwt.secret}")
	    private String secretKey;
	
	    @Value("${jwt.expiration}")
	    private long jwtExpiration;
	
	    // Generate Secret Key
	    private Key getSignInKey() {
	        return Keys.hmacShaKeyFor(secretKey.getBytes());
	    }
	
	    // Generate JWT Token
	    public String generateToken(String email) {
	
	        return Jwts.builder()
	                .subject(email)
	                .issuedAt(new Date())
	                .expiration(new Date(System.currentTimeMillis() + jwtExpiration))
	                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
	                .compact();
	    }
	
	    // Extract Email
	    public String extractUsername(String token) {
	
	        Claims claims = Jwts.parser()
	                .verifyWith((javax.crypto.SecretKey) getSignInKey())
	                .build()
	                .parseSignedClaims(token)
	                .getPayload();
	
	        return claims.getSubject();
	    }
	
	    // Check Expiry
	    public boolean isTokenValid(String token) {
	
	        Claims claims = Jwts.parser()
	                .verifyWith((javax.crypto.SecretKey) getSignInKey())
	                .build()
	                .parseSignedClaims(token)
	                .getPayload();
	
	        return claims.getExpiration().after(new Date());
	    }
	
	}