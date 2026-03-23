import { coursesArray } from "../array"
import { Course } from "../courseComp/course"
import type { courseM } from "../modules/courseM"
import "./courses.css";
export const Courses = () => {
    return(
        <>
        <div className="grid">
        {coursesArray.map((course:courseM) => {
            return <Course course={course} />
        })}
        </div>
        </>
    )
}