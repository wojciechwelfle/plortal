package com.plortal.plortal.model.entity;

import com.plortal.plortal.model.enums.LocationType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Locations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "locationId")
    private int id;

    @NonNull
    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;

    @NonNull
    @Enumerated(EnumType.STRING)
    @Column(name = "locationType")
    private LocationType locationType;

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", locationType=" + locationType +
                '}';
    }
}
