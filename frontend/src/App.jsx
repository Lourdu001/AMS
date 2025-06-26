import { useState } from 'react'
import './App.css'
import Attendance from './components/Attendance'
import Login from './components/Login'
 
function App() {
  const [disp, setdisp] = useState(false)
const move=()=>{
  setdisp(!disp);
 }

  return (
   <div>
{disp===true? <Login move={move} />:<Attendance move={move} />
}
   </div>
  )
}

export default App
