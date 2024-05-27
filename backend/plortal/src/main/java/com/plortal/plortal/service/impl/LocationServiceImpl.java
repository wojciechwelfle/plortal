package com.plortal.plortal.service.impl;

import com.plortal.plortal.model.Location;
import com.plortal.plortal.model.LocationType;
import com.plortal.plortal.repository.LocationRepository;
import com.plortal.plortal.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public List<Location> getLocationsByType(LocationType locationType) {
        return locationRepository.findByLocationType(locationType);
    }

    @Override
    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }
    @Override
    public void deleteLocationById(Long id) {
        locationRepository.deleteById(id);
    }
}
