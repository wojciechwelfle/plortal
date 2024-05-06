package com.plortal.plortal.exception;

public class EmailTakenException extends RuntimeException {
    public EmailTakenException() {
        super("Email is taken.");
    }
}
