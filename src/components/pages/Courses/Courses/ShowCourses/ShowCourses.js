import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const ShowCourses = ({ courseAll }) => {
    const { categoryName, categoryId, courses } = courseAll
    // console.log(categoryName, categoryId, courses)
    return (
        <div className='mx-10 my-20 '>
            <h1 className='text-left font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl  mb-5'>{categoryName}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default ShowCourses;