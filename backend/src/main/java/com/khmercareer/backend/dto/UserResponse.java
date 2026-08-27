package com.khmercareer.backend.dto;

import com.khmercareer.backend.entity.Role;
import com.khmercareer.backend.entity.User;

public class UserResponse {

    private Long id;
    private String fullName;
    private String email;
    private Role role;
    private boolean enabled;

    public UserResponse(
            Long id,
            String fullName,
            String email,
            Role role,
            boolean enabled
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.enabled = enabled;
    }

    public static UserResponse fromUser(User user) {

        return new UserResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                user.isEnabled()
        );
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public Role getRole() {
        return role;
    }

    public boolean isEnabled() {
        return enabled;
    }
}