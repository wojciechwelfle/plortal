package com.plortal.plortal.exception;

public class InputTooLong extends RuntimeException {
    public InputTooLong() {
        super("Password is incorrect");
    }
}
