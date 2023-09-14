import { useState } from "react";
import Courses from "./components/Courses/Courses"
import Cart from "./components/cart/cart"



function App() {
   const [selectCourses ,setSelectCourses] = useState([]);
  const handleSelectCourse = (course) => {
    setSelectCourses([...selectCourses, course]);
     console.log('click');
  }
  return (

    <div className="bg-slate-50">
     
    <div className="w-10/12 m-auto">
      <h1 className="text-3xl font-bold text-black text-center pt-14 mb-8"> Course Registration</h1>
      <div className="md:flex gap-6">
         <Courses handleSelectCourse ={handleSelectCourse}></Courses>

         <Cart selectCourses ={selectCourses}></Cart>
      </div>
    </div>
     
    </div>
  )
}

export default App
