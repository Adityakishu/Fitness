import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'



import Navbar from "./component/Navbar"
import Home from './component/Home'
import Login from './component/Login'
import Register from "./component/Register"
import Exercise from './component/Exercise'
import WaterIntake from "./component/WaterIntake"
import SearchExercises from './component/SearchExercises'
import ExerciseDetails from './component/ExerciseDetails'
import ExerciseCard from './component/ExerciseCard'
import Logout from './component/Logout'
import ForgotPassword from './component/ForgotPassword'
import VerifyOTP from './component/VerifyOTP'
import ResetPassword from './component/ResetPassword'



function App() {
  const [count, setCount] = useState(0)



  return (
    <>


    <Router>
      <Navbar/>     
      <Routes>


           <Route path='/home' element={<Home/>}/>    
           <Route path='Login' element={<Login/>}/>
           <Route path='Register' element={<Register/>}/>
           <Route path='Exercise' element={<Exercise/>}/>
           <Route path='WaterIntake' element={<WaterIntake/>}/>
           <Route path='/SearchExercises' element={<SearchExercises/>}/>    
           <Route path='/ExerciseDetails' element={<ExerciseDetails/>}/>    
           <Route path='/ExerciseCard' element={<ExerciseCard/>}/> 
           <Route path='/Logout' element={<Logout/>}/> 
           <Route path='/ForgotPassword' element={<ForgotPassword/>}/> 
           <Route path='/VerifyOTP' element={<VerifyOTP/>}/> 
           <Route path='/ResetPassword' element={<ResetPassword/>}/> 
           
   
    

      </Routes>
    </Router>


    </>

  )
}

export default App
