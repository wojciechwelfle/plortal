package com.plortal.plortal.dto;

public record NewsDTO(
        int id,
        String title,
        String photoUrl,
        String description,
        String modificationDate
) {
}
