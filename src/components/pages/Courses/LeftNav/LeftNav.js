import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = ({ courseAll }) => {
    const { categoryName, categoryId, courses } = courseAll
    // console.log(courses)

    return (
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
            <div className="collapse-title text- md:text-lg lg:text-xl font-medium bg-gray-500 ">
                <h3 className="text-left ">{categoryName}</h3>
            </div>
            <div className="collapse-content">
                {
                    courses.map(course => <li key={course.id} className='text-left ml-3 hover:underline'><Link to="">{course.title}</Link></li>)
                }

            </div>
        </div>
    );
};

export default LeftNav;