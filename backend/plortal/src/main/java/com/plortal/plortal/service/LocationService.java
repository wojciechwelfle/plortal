package com.plortal.plortal.service;

import com.plortal.plortal.model.Location;
import com.plortal.plortal.model.LocationType;

import java.util.List;

public interface LocationService {
    List<Location> getLocationsByType(LocationType locationType);
    Location addLocation(Location location);
    void deleteLocationById(Long id);
}