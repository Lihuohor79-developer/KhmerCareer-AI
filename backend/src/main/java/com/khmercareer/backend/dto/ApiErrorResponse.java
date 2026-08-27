package com.khmercareer.backend.dto;

import java.time.LocalDateTime;
import java.util.Map;

public class ApiErrorResponse {

    private boolean success;
    private String message;
    private LocalDateTime timestamp;
    private Map<String, String> errors;

    public ApiErrorResponse(
            boolean success,
            String message,
            LocalDateTime timestamp
    ) {
        this.success = success;
        this.message = message;
        this.timestamp = timestamp;
    }

    public ApiErrorResponse(
            boolean success,
            String message,
            LocalDateTime timestamp,
            Map<String, String> errors
    ) {
        this.success = success;
        this.message = message;
        this.timestamp = timestamp;
        this.errors = errors;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public Map<String, String> getErrors() {
        return errors;
    }
}