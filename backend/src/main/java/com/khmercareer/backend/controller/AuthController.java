package com.khmercareer.backend.controller;

import com.khmercareer.backend.dto.LoginRequest;
import com.khmercareer.backend.dto.LoginResponse;
import com.khmercareer.backend.dto.RegisterRequest;
import com.khmercareer.backend.dto.UserResponse;
import com.khmercareer.backend.entity.User;
import com.khmercareer.backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @Valid @RequestBody RegisterRequest request
    ) {

        User user = authService.register(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(UserResponse.fromUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid @RequestBody LoginRequest request
    ) {

        LoginResponse response =
                authService.login(request);

        return ResponseEntity.ok(response);
    }
}