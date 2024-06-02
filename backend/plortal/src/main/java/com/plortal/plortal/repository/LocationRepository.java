package com.plortal.plortal.repository;

import com.plortal.plortal.model.entity.Location;
import com.plortal.plortal.model.enums.LocationType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByLocationType(LocationType locationType);
}
