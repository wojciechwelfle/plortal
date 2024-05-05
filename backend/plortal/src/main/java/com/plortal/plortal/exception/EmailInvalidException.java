package com.plortal.plortal.exception;

public class EmailInvalidException extends RuntimeException {
    public EmailInvalidException() {
        super("Email does not meet requirements.");
    }
}
