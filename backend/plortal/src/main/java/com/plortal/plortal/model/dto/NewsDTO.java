package com.plortal.plortal.model.dto;

import jakarta.validation.constraints.Size;
import lombok.NonNull;

import java.util.Objects;

public record NewsDTO(
        int id,
        @NonNull
        @Size(max = 70)
        String title,
        @NonNull
        @Size(max = 1000)
        String photoUrl,
        @NonNull
        @Size(max = 1000)
        String description,
        String modificationDate
) {
    public NewsDTO {
        modificationDate = Objects.requireNonNullElse(modificationDate, "");
    }
}
