import { useEffect } from "react"
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import "leaflet-geosearch/dist/geosearch.css"
import { Icon } from "leaflet";

const provider = new OpenStreetMapProvider();

const pinIcon = new Icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
    iconSize: [40, 40]
})

const searchControl = new GeoSearchControl({
    provider: provider,
    autoComplete: true,
    showPopup: true,
    style: 'bar',
    marker: {
        icon: pinIcon,
    },
    notFoundMessage: 'Sorry, that address could not be found.',
});

const LocationSearcher = () => {
    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);
    return null;
};

export default LocationSearcher;