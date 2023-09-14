import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleSelectCourse}) => {
    const [allCourses,setAllCourses] =useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setAllCourses(data))
    },[])
    return (
       <div className="md:w-3/4">
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allCourses.map((course) => <Course handleSelectCourse ={handleSelectCourse} key={course.id} course={course}></Course>)
            }
        </div>
    </div>
    );
};
Courses.propTypes = {
    handleSelectCourse:PropTypes.function
}

export default Courses;