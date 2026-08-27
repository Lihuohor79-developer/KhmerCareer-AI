package com.khmercareer.backend.service;

import com.khmercareer.backend.dto.LoginRequest;
import com.khmercareer.backend.dto.LoginResponse;
import com.khmercareer.backend.dto.RegisterRequest;
import com.khmercareer.backend.dto.UserResponse;
import com.khmercareer.backend.entity.User;
import com.khmercareer.backend.repository.UserRepository;
import com.khmercareer.backend.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.khmercareer.backend.exception.InvalidCredentialsException;
import com.khmercareer.backend.exception.ResourceAlreadyExistsException;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public User register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new  ResourceAlreadyExistsException(
        "Email is already registered"
);
        }

        String encodedPassword =
                passwordEncoder.encode(request.getPassword());

        User user = new User(
                request.getFullName(),
                request.getEmail(),
                encodedPassword,
                request.getRole()
        );

        return userRepository.save(user);
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid email or password"
                        )
                );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {

            throw new InvalidCredentialsException(
        "Invalid email or password"
);
        }

        if (!user.isEnabled()) {

            throw new InvalidCredentialsException(
        "This account is disabled"
);
        }

        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole().name()
        );

        return new LoginResponse(
                token,
                "Bearer",
                UserResponse.fromUser(user)
        );
    }
}