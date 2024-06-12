package com.plortal.plortal.exception;

public class PlanNotFoundException extends RuntimeException{
    public PlanNotFoundException() {
        super("Plan not found.");
    }
}
