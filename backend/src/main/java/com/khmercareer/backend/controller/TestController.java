package com.khmercareer.backend.controller;

import com.khmercareer.backend.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/protected")
    public String protectedEndpoint(
            Authentication authentication
    ) {

        User user = (User) authentication.getPrincipal();

        return "Hello " + user.getFullName()
                + "! You are authenticated as "
                + user.getRole();
    }
}