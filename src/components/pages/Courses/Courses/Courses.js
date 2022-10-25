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
        <div className='flex flex-col lg:grid lg:grid-cols-6 xl:grid-cols-4 gap-4 ' >
            <div className='lg:col-span-2 xl:col-span-1 '>
                <div className={`h-screen mt-10 ${ETheme ? 'themeLight' : "themeDark"}  rounded-2xl`}>
                    <div className={` sticky top-10 `}>
                        {
                            categoryCourses.map(courses => <LeftNav key={courses.categoryId} courseAll={courses}></LeftNav>)
                        }
                    </div>
                </div>
            </div>
            <div className={`lg:col-span-4 xl:col-span-3`}>


                {
                    categoryCourses.map(courses => <ShowCourses key={courses.categoryId} courseAll={courses}></ShowCourses>)
                }

            </div>
        </div>
    );
};

export default Courses; 