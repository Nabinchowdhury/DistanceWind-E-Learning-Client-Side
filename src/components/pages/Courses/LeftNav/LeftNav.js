import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../layout/Main/Main';

const LeftNav = ({ courseAll }) => {

    const { ETheme } = useContext(ThemeContext)
    const { categoryName, courses } = courseAll


    return (
        <div tabIndex={0} className={`collapse collapse-open border border-base-300 bg-base-100 rounded-box ${ETheme ? "bg-gradient-to-r from-slate-400" : "bg-transparent"}`}>
            <div className={`collapse-title text- md:text-lg lg:text-xl font-medium `}>
                <h3 className="text-left ">{categoryName}</h3>
            </div>
            <div className="collapse-content ">
                {
                    courses.map(course => <li key={course.id} className='text-left ml-3 hover:underline'><Link className='' to={`/course/${course.id}`}>{course.title}</Link></li>)
                }

            </div>
        </div>
    );
};

export default LeftNav;