package com.plortal.plortal.service;

import com.plortal.plortal.model.entity.Location;
import com.plortal.plortal.model.enums.LocationType;

import java.util.List;

public interface LocationService {
    List<Location> getAllLocations();

    List<Location> getLocationsByType(LocationType locationType);

    void addLocation(Location location);

    void deleteLocationById(Long id);
}