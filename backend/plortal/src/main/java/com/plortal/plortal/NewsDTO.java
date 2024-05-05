package com.plortal.plortal;

public record NewsDTO(
        int id,
        String title,
        String photoUrl,
        String description,
        String modificationDate
) {
}
