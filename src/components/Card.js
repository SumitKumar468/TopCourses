import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
function Card(props){
    let course = props.course;
    let linkedCourses = props.linkedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(linkedCourses.includes(course.id)){
            // phele se liked hua pda hai
            setLikedCourses( (prev) => 
                prev.filter ( (cid) => 
                    (cid !== course.id)
            ));
            toast.warning("linked removed");
        }else{
            // phele se like nhai hai
            if(linkedCourses.length === 0){
                setLikedCourses([course.id])
            }else{
                // non - empth phele se
                setLikedCourses((prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='top-card'>
            <div className='image'>
                <img src={course.image.url} alt='Cources1'></img>

                <div className='heart-btn'>
                    <button onClick={clickHandler} className='heart'>
                        {
                            linkedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
                        }
                    </button>
            </div>
            </div>
            
            <div>
                <p className='title'>{course.title}</p>
                <p className='crs-desc'>
                    {
                        course.description.length > 100 ? 
                        (course.description.substr(0,100)) + '...' :
                        (course.description) 
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;