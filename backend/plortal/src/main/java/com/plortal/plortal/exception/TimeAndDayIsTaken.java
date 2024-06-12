package com.plortal.plortal.exception;

public class TimeAndDayIsTaken extends RuntimeException{
    public TimeAndDayIsTaken() {
        super("Course not found.");
    }
}
