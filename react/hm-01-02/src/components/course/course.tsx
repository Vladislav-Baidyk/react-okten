import type { FC } from "react"
import type { CourseM } from "../../models/model"


type CourseType = {
    course:CourseM;
}
export const Course:FC<CourseType> = ({course}) => {

    return(
        <>
            <div>
                <h1>{course.title}</h1>
                <p>{course.monthDuration}</p>
            </div>
        </>
    )
};