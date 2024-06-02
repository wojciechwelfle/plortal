package com.plortal.plortal.model.dto;

import java.util.Objects;

public record NewsDTO(
        int id,
        String title,
        String photoUrl,
        String description,
        String modificationDate
) {
    public NewsDTO {
        title = Objects.requireNonNullElse(title, "");
        photoUrl = Objects.requireNonNullElse(photoUrl, "");
        description = Objects.requireNonNullElse(description, "");
        modificationDate = Objects.requireNonNullElse(modificationDate, "");
    }
}
