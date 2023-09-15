import { useState } from "react";
import Courses from "./components/Courses/Courses"
import Cart from "./components/cart/cart"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const [selectCourses ,setSelectCourses] = useState([]);
   const [totalCredits,setTotalCredits] = useState(0);
   const [remainingCredits, setRemainingCredits] = useState(20);
   const [totalPrices,setTotalPrices] = useState(0);
  const handleSelectCourse = (course) => {
    const isExist = selectCourses.find((item) => item.id === course.id);
    let totalCredit = course.credit;
    let totalPrice = course.price; 
    if(isExist){
      toast("This course already marked in cart,please another course add to cart ");
    }else{
      selectCourses.map(selectCourse =>{ totalCredit += selectCourse.credit})
      selectCourses.map(selectCourse =>{ totalPrice += selectCourse.price})
      const remainingCredit = 20 - totalCredit;
      if(totalCredit > 20 || remainingCredit < 0){
        toast("Your credit has been cross limited ");
      }else{
        setTotalCredits(totalCredit);
        setRemainingCredits(remainingCredit);
        setTotalPrices(totalPrice);
        setSelectCourses([...selectCourses, course]);
        }


    }
    
  }
  return (

    <div className="bg-slate-50">
     
    <div className="w-10/12 m-auto">
      <h1 className="text-3xl font-bold text-black text-center pt-14 mb-8"> Course Registration</h1>
      <div className="md:flex gap-6">
         <Courses handleSelectCourse ={handleSelectCourse}></Courses>
        <Cart totalPrices={totalPrices} totalCredits={totalCredits} remainingCredits={remainingCredits} selectCourses ={selectCourses}></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </div>
     
    </div>
  )
}

export default App
