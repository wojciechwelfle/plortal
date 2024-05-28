package com.plortal.plortal.controller;

import com.plortal.plortal.exception.LocationNotFoundException;
import com.plortal.plortal.model.Location;
import com.plortal.plortal.model.LocationType;
import com.plortal.plortal.service.LocationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000/")
@Tag(name = "Location")
public class LocationController {
    private final LocationService locationService;

    @Autowired
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("api/v1/locations")
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }
    @GetMapping("api/v1/locations/parks")
    public List<Location> getParks() {
        return locationService.getLocationsByType(LocationType.PARK);
    }

    @GetMapping("api/v1/locations/restaurants")
    public List<Location> getRestaurants() {
        return locationService.getLocationsByType(LocationType.RESTAURANT);
    }

    @GetMapping("api/v1/locations/buildings")
    public List<Location> getBuildings() {
        return locationService.getLocationsByType(LocationType.UNIVERSITY_BUILDING);
    }

    @PostMapping("api/v1/locations")
    public ResponseEntity<?> addLocation(@RequestBody Location location) {
        locationService.addLocation(location);
        return ResponseEntity.ok("Location added!");
    }

    @DeleteMapping("api/v1/locations/{id}")
    public ResponseEntity<?> deleteLocation(@PathVariable Long id) {
        try {
            locationService.deleteLocationById(id);
            return ResponseEntity.ok("Location id=" + id + " has been deleted!");
        } catch (LocationNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }
}
