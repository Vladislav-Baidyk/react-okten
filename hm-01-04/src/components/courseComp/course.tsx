import type { courseM } from "../modules/courseM";
import type { FC } from "react";
import "./course.css"
import clock from "../../assets/schedule.png";
type CourseProps={
    course:courseM
}
export const Course:FC<CourseProps> = ({course}) => {
    return(
        <>
            <div className="course-box">
                <div className="course-content">
                    <div className="cool-header">
                        {course.title}
                    </div>
                    <div className="time-cotnainer">
                        <div className="time-block">
                            <img className="image-time" src={clock} alt="time" />
                            {course.hourDuration}
                        </div>
                            <div className="time-block">
                            <img className="image-time" src={clock} alt="time" />
                            {course.monthDuration}
                        </div>
                    </div>
                    <div className="modules">
                {course.modules.map((module,index) => (
                        <div className="module" key={index}>{module}</div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}