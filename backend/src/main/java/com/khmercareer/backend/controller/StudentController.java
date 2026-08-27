package com.khmercareer.backend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @GetMapping("/test")
    public String studentTest(
            Authentication authentication
    ) {

        return "Welcome Student! "
                + authentication.getName();
    }
}