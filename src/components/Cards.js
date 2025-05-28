import Card from './Card';
import { useState } from 'react';
function Cards(props){
    let courses = props.courses;
    let catagory = props.catagory;

    const [linkedCourses , setLikedCourses] = useState([]);

    // response ma jo bhe data mila hai usko ek single array ma convert kr diya hai.
    function getCourses(){
        
        if(catagory === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;

        }else{
            return courses[catagory];
        }
    }

    return (
        <div className='cards-display'>
            {
                getCourses().map( (course) => {
                    return <Card key = {course.id} 
                    course = {course}
                    linkedCourses = {linkedCourses}
                    setLikedCourses = {setLikedCourses}></Card>
                })
            }
        </div>
    );
}

export default Cards;