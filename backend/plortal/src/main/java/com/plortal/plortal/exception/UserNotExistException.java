package com.plortal.plortal.exception;

public class UserNotExistException extends RuntimeException {
    public UserNotExistException() {
        super("User is not exist.");
    }
}
