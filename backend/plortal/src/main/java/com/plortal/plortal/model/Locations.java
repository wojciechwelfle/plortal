package com.plortal.plortal.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Table(name = "Locations")
@Getter
@Setter
public class Locations {
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

    public Locations(int id, String name, double latitude, double longitude, LocationType locationType) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.locationType = locationType;
    }

    public Locations(String name, double latitude, double longitude, LocationType locationType) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.locationType = locationType;
    }

    public Locations() {
    }

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
