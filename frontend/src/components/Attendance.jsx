import React from 'react'
import './Attendance.css'
import mail from '../assets/mail.svg'

const Attendance = () => {
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
             
                <th className='singlestyle'><p >Date</p> <img className='img' src={mail} alt="mail"  /></th>
                <th className='empstyle'><h4 >EmpID</h4> <img className='img' src={mail} alt="mail"  /></th>
                <th className='singlestyle'><h4 >Name</h4> <img className='img'  src={mail} alt="mail" /></th>
                <th className='attendancestyletemp'><h4 >Attendance</h4> <img  className='img' src={mail} alt="mail"  /></th>
                <th className='singlestyle'><h4 >Time In</h4> <img className='img' src={mail} alt="mail" /></th>
                <th className='timeoutstyle'><h4 >Time Out</h4> <img className='img' src={mail} alt="mail"  /></th>

              </tr>
            </thead>
            <tbody>
              <tr className='trstyle'>
                <td className='singlestyle'>{date}</td>
                <td className='empstyle'>{empid}</td>
                <td className='singlestyle'>{empname}</td>
                <td className='attendancestyletemp'><p >{attendance}</p><p >{ontime}</p></td>
                <td className='singlestyle'>{timein}</td>
                <td className='timeoutstyle'>{timeout}</td>
              </tr>
            </tbody>
          </table>
        
    </div>
    </div>
</div>
)
}

export default Attendance