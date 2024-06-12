import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/courses";

export const getAllCourses = () => axios.get(REST_API_URL);

export const addCourse = (course) => axios.post(REST_API_URL, course);

export const deleteCourse = (id) => axios.delete(`${REST_API_URL}/${id}`);