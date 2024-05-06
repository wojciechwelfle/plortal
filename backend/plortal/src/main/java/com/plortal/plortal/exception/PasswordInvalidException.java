package com.plortal.plortal.exception;

public class PasswordInvalidException extends RuntimeException {
    public PasswordInvalidException() {
        super("Password is incorrect");
    }
}
