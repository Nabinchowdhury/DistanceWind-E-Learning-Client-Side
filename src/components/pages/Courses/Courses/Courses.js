import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';
import ShowCourses from './ShowCourses/ShowCourses';

const Courses = () => {

    const categoryCourses = useLoaderData()
    return (
        <div className='grid grid-cols-5 gap-4' >
            <div className='col-span-1 border'>
                {
                    categoryCourses.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                }
            </div>
            <div className='col-span-4 border'>

                {
                    categoryCourses.map(courses => <ShowCourses key={courses.categoryId} courseAll={courses}></ShowCourses>)
                }
            </div>
        </div>
    );
};

export default Courses; 