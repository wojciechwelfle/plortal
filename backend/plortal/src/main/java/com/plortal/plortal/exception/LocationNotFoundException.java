package com.plortal.plortal.exception;

public class LocationNotFoundException extends RuntimeException {
    public LocationNotFoundException() {
        super("Location not found.");
    }
}