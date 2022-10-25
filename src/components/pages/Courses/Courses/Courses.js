import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../../layout/Main/Main';
import LeftNav from '../LeftNav/LeftNav';
import ShowCourses from './ShowCourses/ShowCourses';

const Courses = () => {
    const { ETheme } = useContext(ThemeContext)
    const categoryCourses = useLoaderData()
    return (
        <div className='grid grid-cols-5 gap-4' >
            <div className='col-span-1 '>
                <div className={`sticky top-10 mt-20'  ${ETheme ? 'themeLight' : "themeDark"} rounded-2xl`}>
                    {
                        categoryCourses.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                    }
                </div>
            </div>
            <div className={`col-span-4`}>


                {
                    categoryCourses.map(courses => <ShowCourses key={courses.categoryId} courseAll={courses}></ShowCourses>)
                }

            </div>
        </div>
    );
};

export default Courses; 