package com.plortal.plortal.exception;

public class UserIsNotAdminException extends RuntimeException {
    public UserIsNotAdminException() {
        super("User is not Admin.");
    }
}
