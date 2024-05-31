package com.plortal.plortal.repository;

import com.plortal.plortal.model.Location;
import com.plortal.plortal.model.LocationType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByLocationType(LocationType locationType);
}
