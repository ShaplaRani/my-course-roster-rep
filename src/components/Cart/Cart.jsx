

import PropTypes from 'prop-types'

const Cart = ({selectCourses}) => {

    return (
        <div className="md:w-1/4 ">
          <div className='bg-white p-6  rounded-xl'>
            <h3 className='text-xl font-bold text-black mb-5'> Course Name</h3>
            <ul className='text-gray-500 list-decimal text-lg font-normal ml-6'>
              {
                selectCourses.map(course => <li key ={course.id}>{course.title}</li>)
              }
           </ul>
          </div>
           
        </div>
    );
};
Cart.propTypes = {
    selectCourses:PropTypes.array
}

export default Cart;