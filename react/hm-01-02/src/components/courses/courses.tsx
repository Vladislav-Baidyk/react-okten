import type { CourseM } from "../../models/model";
import { Course } from "../course/course";

export const Courses = () => {

const coursesAndDurationArray:{title:string,monthDuration:number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
        return(
            <>
                {coursesAndDurationArray.map((course:CourseM) => {
                    return <Course course ={course} />;
                } )}
            </>
        )
}