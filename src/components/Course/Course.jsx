import {BsBook}  from "react-icons/bs";
import PropTypes from 'prop-types';
const Course = ({course ,handleSelectCourse}) => {
    const {image,title,credit,price,details} = course;
    
    return (
        
        <div className=" bg-white p-4 rounded-xl">
            <img className='w-full'  src={image}alt="" ></img>
            <h3 className='text-lg font-semibold text-black mt-4 mb-3'>{title}</h3>
             <p className='leading-6  text-sm font-normal text-gray-500'>{details}</p>
             <div className='my-5 flex items-center  justify-between p-5'>
                 
                <h4 className='text-2xl md:text-lg lg:text-2xl'> $ </h4>
                <p className='text-lg md:text-sm lg:text-lg font-medium text-gray-500'>Price : {price}</p>
                 <h4 className="text-2xl md:text-lg lg:text-2xl"><BsBook></BsBook></h4>
                <p className='text-lg md:text-sm lg:text-lg font-medium text-gray-500'>Credit : {credit}hr</p>
             </div>
             <button onClick={() => handleSelectCourse(course)} className='w-full py-2 rounded-lg 
             text-lg font-semibold text-white bg-blue-500'>Select</button>
            
        </div>
    );
};
Course.propTypes = {
    course:PropTypes.object,
    handleSelectCourse:PropTypes.function
}

export default Course;