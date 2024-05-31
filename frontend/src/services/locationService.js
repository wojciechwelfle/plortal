import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/locations";

export const getAllLocations = () => axios.get(REST_API_URL);

export const getParks = () => axios.get(`${REST_API_URL}/parks`);

export const getRestaurants = () => axios.get(`${REST_API_URL}/restaurants`);

export const getBuildings = () => axios.get(`${REST_API_URL}/buildings`);

export const addLocation = (location) => axios.post(REST_API_URL, location);

export const deleteLocation = (id) => axios.delete(`${REST_API_URL}/${id}`);