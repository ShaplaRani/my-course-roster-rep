import PropTypes from 'prop-types'

const Cart = ({selectCourses, totalPrices, totalCredits,remainingCredits}) => {

    return (
        <div className="lg:w-1/4 ">
          <div className='bg-white p-6  rounded-xl'>
             <h3 className='text-lg font-bold text-blue-500'>Credit Hour Remaining {remainingCredits} hr</h3>
            <div className=' my-4' >
                <hr />
            </div>
            <h3 className='text-xl font-bold text-black mb-5'> Course Name</h3>
            <ul className='text-gray-500 list-decimal text-lg font-normal ml-6 '>
              {
                selectCourses.map(course => <li key ={course.id}>{course.title}</li>)
              }
           </ul>
           <div className=' mb-4 mt-6' >
                <hr />
            </div>
            <h4 className='text-lg font-medium text-gray-700 '>Total Credit Hour : {totalCredits}</h4>
            <div className=' my-4' >
                <hr />
            </div>
          <p className='text-lg font-semibold text-gray-800'>Total Price : {totalPrices} USD</p>
          </div>
           
        </div>
    );
};
Cart.propTypes = {
    selectCourses:PropTypes.array,
    totalCredits:PropTypes.number,
    remainingCredits:PropTypes.number,
    totalPrices:PropTypes.number

}

export default Cart;