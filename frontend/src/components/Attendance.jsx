  import React from 'react'
  import './Attendance.css'

  import { LuArrowDownUp } from "react-icons/lu";

  const Attendance = ({ move}) => {
  const date = "11.11.2025";
  const empid = 111;
  const empname = "Lord";
  const attendance = "19.00.00";
  const ontime = "on time";
  const timein = "19.00.00";
  const timeout = "23.00.00";


    return (
  <div className='attendencepagecontainer'>
      <div className='insidecontainer'>
      <div className='pagetopcontaioner'>
        <div className='testingwidth'>
  <div className='excelandpdfcontainer'>
      <h5 className='exandpditem'>Excel</h5>
      <h5 className='exandpditem'>PDF</h5>
  </div>
  <div >
      <label className='searchlabel' htmlFor="">Search:</label>
      <input className='inputboxforsearch' type="text" name="" id="" />
  </div>
  </div>
      </div>
      <div className='tabletopcontainer'>
  <table className='tabletag'>
              <thead>
                <tr className='trstyle bgstyle' >
              
                  <th className='singlestyle'><p >Date</p> <LuArrowDownUp className='img' color='white' /></th>
                  <th className='empstyle'><h4 >EmpID</h4> <LuArrowDownUp className='img' color='white' /> </th>
                  <th className='singlestyle'><h4 >Name</h4>  <LuArrowDownUp className='img' color='white' /></th>
                  <th className='attendancestyletemp'><h4 >Attendance</h4> <LuArrowDownUp className='img' color='white' /> </th>
                  <th className='singlestyle'><h4 >Time In</h4> <LuArrowDownUp className='img' color='white' /> </th>
                  <th className='timeoutstyle'><h4 >Time Out</h4> <LuArrowDownUp className='img' color='white' /> </th>

                </tr>
              </thead>
              <tbody>
                <tr className='trstyle'>
                  <td className='singlestyle'>{date}</td>
                  <td className='empstyle'>{empid}</td>
                  <td className='singlestyle'>{empname}</td>
                  <td className='attendancestyletemp'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
                  <td className='singlestyle'>{timein}</td>
                  <td className='timeoutstyle'>{timeout}</td>
                </tr>
                <tr className='trstyle bgstyle'>
                  <td className='singlestyle bgstyle'>{date}</td>
                  <td className='empstyle bgstyle'>{empid}</td>
                  <td className='singlestyle bgstyle'>{empname}</td>
                  <td className='attendancestyletemp bgstyle'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
                  <td className='singlestyle bgstyle'>{timein}</td>
                  <td className='timeoutstyle bgstyle'>{timeout}</td>
                </tr>
                 <tr className='trstyle'>
                  <td className='singlestyle'>{date}</td>
                  <td className='empstyle'>{empid}</td>
                  <td className='singlestyle'>{empname}</td>
                  <td className='attendancestyletemp'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
                  <td className='singlestyle'>{timein}</td>
                  <td className='timeoutstyle'>{timeout}</td>
                </tr>
                 <tr className='trstyle bgstyle'>
                  <td className='singlestyle bgstyle'>{date}</td>
                  <td className='empstyle bgstyle'>{empid}</td>
                  <td className='singlestyle bgstyle'>{empname}</td>
                  <td className='attendancestyletemp bgstyle'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
                  <td className='singlestyle bgstyle'>{timein}</td>
                  <td className='timeoutstyle bgstyle'>{timeout}</td>
                </tr> 
              </tbody>
            </table>
          
          
      </div>
        <button onClick={move}>Log In</button>
      </div>
  </div>
  )
  }

  export default Attendance