package com.plortal.plortal.validation;

public class PasswordValidator {
    public static boolean validatePassword(String password) {
        String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";
        return password.matches(passwordRegex) && password.length() >= 8 && password.length() <= 50;
    }
}