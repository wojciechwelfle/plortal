package com.plortal.plortal.model;

import com.plortal.plortal.model.enums.LocationType;
import jakarta.persistence.*;
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
    @Column(name = "name", length = 100)
    private String name;

    @NonNull
    @Column(name = "latitude")
    private double latitude;

    @NonNull
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
