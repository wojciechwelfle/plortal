package com.plortal.plortal.validation;

public class EmailValidator {

    public static boolean validateEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        return email.matches(emailRegex) && email.length() >= 7 && email.length() <= 100;
    }
}
