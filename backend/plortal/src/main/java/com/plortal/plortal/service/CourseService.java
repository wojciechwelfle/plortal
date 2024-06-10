package com.plortal.plortal.service;

import com.plortal.plortal.model.entity.Course;

import java.util.List;

public interface CourseService {
    List<Course> getAllCourses();

    void addCourse(Course course);

    void deleteCourseById(Long id);
}
