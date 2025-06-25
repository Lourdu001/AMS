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
    <div>
<div>
    <h5>Excel</h5>
    <h5>PDF</h5>
</div>
<div>
    <label htmlFor="">Search:</label>
    <input type="text" name="" id="" />
</div>
    </div>
    <div className='tabletopcontainer'>
 <table>
            <thead>
              <tr>
                <th className='tdstyle'><p className='fright'>Date</p> <img className='fleft' src={mail} alt="mail" color='black' /></th>
                <th className='tdstyle'>Date <img src={mail} alt="mail" color='black' /></th>
                <th className='tdstyle'><p>Name</p><p>⬆️⬇️</p></th>
                <th className='tdstyle'><div>Attendance</div><div>⬆️⬇️</div></th>
                <th className='tdstyle'><div>Time In</div><div>⬆️⬇️</div></th>
                <th className='tdstyle'><div>Time Out</div><div>⬆️⬇️</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{date}</td>
                <td>{empid}</td>
                <td>{empname}</td>
                <td><div>{attendance}</div><div>{ontime}</div></td>
                <td>{timein}</td>
                <td>{timeout}</td>
              </tr>
            </tbody>
          </table>
        
    </div>
    </div>
</div>
)
}

export default Attendance