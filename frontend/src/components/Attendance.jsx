//   import React,{useState} from 'react'
//   import './Attendance.css'
//   import axios from 'axios'

//   import { LuArrowDownUp } from "react-icons/lu";
// import { useEffect } from 'react';




//   const Attendance = ({ move}) => {
// const [data, setdata] = useState([]);
// const [onload, setonload] = useState(false);

// const BaseUrl = 'https://amsserver.onrender.com';

// const storedata = async() =>{
  
//  try {
//       const response = await axios.get(`${BaseUrl}/getdata`); 
//       setdata(response.data);
//       setonload(false);
//       console.log("Data fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }   

// }

// useEffect(()=>{
//   setonload(true);
// storedata();
// },[])



//     return (
//   <div className='attendencepagecontainer'>
//       <div className='insidecontainer'>
//       <div className='pagetopcontaioner'>
//         <div className='testingwidth'>
//   <div className='excelandpdfcontainer'>
//       <h5 className='exandpditem'>Excel</h5>
//       <h5 className='exandpditem'>PDF</h5>
//   </div>
//   <div >
//       <label className='searchlabel' htmlFor="">Search:</label>
//       <input className='inputboxforsearch' type="text" name="" id="" />
//   </div>
//   </div>
//       </div>
//       <div className='tabletopcontainer'>
//   <table className='tabletag'>
//               <thead>
//                 <tr className='trstyle bgstyle' >
              
//                   <th className='singlestyle'><p >Date</p> <LuArrowDownUp className='img' color='white' /></th>
//                   <th className='empstyle'><h4 >EmpID</h4> <LuArrowDownUp className='img' color='white' /> </th>
//                   <th className='singlestyle'><h4 >Name</h4>  <LuArrowDownUp className='img' color='white' /></th>
//                   <th className='attendancestyletemp'><h4 >Attendance</h4> <LuArrowDownUp className='img' color='white' /> </th>
//                   <th className='singlestyle'><h4 >Time In</h4> <LuArrowDownUp className='img' color='white' /> </th>
//                   <th className='timeoutstyle'><h4 >Time Out</h4> <LuArrowDownUp className='img' color='white' /> </th>

//                 </tr>
//               </thead>
//               <tbody>
//                {/* {data.length===0||data.map((item)=> <tr className='trstyle'>
//                   <td className='singlestyle'>{item.date}</td>
//                   <td className='empstyle'>{item.empid}</td>
//                   <td className='singlestyle'>{item.name}</td>
//                   <td className='attendancestyletemp'><p >{item.attendance}</p><p className='ontimestyle'>{ontime}</p></td>
//                   <td className='singlestyle'>{item.timein}</td>
//                   <td className='timeoutstyle'>{item.timeout}</td>
//                 </tr>)} */}
//                 {
//                   onload===false||  <tr><td colSpan="6">Loading..... </td></tr>

//                 }
//                {onload===false&&data.length === 0 ? (
//   <tr><td colSpan="6">No data available</td></tr>
// ) : (
//   data.map((item, index) => {{index%2==0?
//     <tr className='trstyle ' key={index}>
//       <td className='singlestyle'>{item.date}</td>
//       <td className='empstyle'>{item.empid}</td>
//       <td className='singlestyle'>{item.name}</td>
//       <td className='attendancestyletemp'>
//         <p>{item.attendance}</p>
//         <p className='ontimestyle'>ontime</p>
//       </td>
//       <td className='singlestyle'>{item.timein}</td>
//       <td className='timeoutstyle'>{item.timeout}</td>
//     </tr>: <tr className='trstyle bgstyle ' key={index}>
//       <td className='singlestyle bgstyle' >{item.date}</td>
//       <td className='empstyle bgstyle'>{item.empid}</td>
//       <td className='singlestyle bgstyle'>{item.name}</td>
//       <td className='attendancestyletemp bgstyle'>
//         <p>{item.attendance}</p>
//         <p className='ontimestyle'>ontime</p>
//       </td>
//       <td className='singlestyle bgstyle'>{item.timein}</td>
//       <td className='timeoutstyle bgstyle'>{item.timeout}</td>
//     </tr>
//     }
//   })
// )}

//                 {/* <tr className='trstyle bgstyle'>
//                   <td className='singlestyle bgstyle'>{date}</td>
//                   <td className='empstyle bgstyle'>{empid}</td>
//                   <td className='singlestyle bgstyle'>{empname}</td>
//                   <td className='attendancestyletemp bgstyle'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
//                   <td className='singlestyle bgstyle'>{timein}</td>
//                   <td className='timeoutstyle bgstyle'>{timeout}</td>
//                 </tr>
//                  <tr className='trstyle'>
//                   <td className='singlestyle'>{date}</td>
//                   <td className='empstyle'>{empid}</td>
//                   <td className='singlestyle'>{empname}</td>
//                   <td className='attendancestyletemp'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
//                   <td className='singlestyle'>{timein}</td>
//                   <td className='timeoutstyle'>{timeout}</td>
//                 </tr>
//                  <tr className='trstyle bgstyle'>
//                   <td className='singlestyle bgstyle'>{date}</td>
//                   <td className='empstyle bgstyle'>{empid}</td>
//                   <td className='singlestyle bgstyle'>{empname}</td>
//                   <td className='attendancestyletemp bgstyle'><p >{attendance}</p><p className='ontimestyle'>{ontime}</p></td>
//                   <td className='singlestyle bgstyle'>{timein}</td>
//                   <td className='timeoutstyle bgstyle'>{timeout}</td>
//                 </tr>  */}
//               </tbody>
//             </table>
          
          
//       </div>
//         <button onClick={move}>Log In</button>
//       </div>
//   </div>
//   )
//   }

//   export default Attendance
import React, { useState, useEffect } from 'react';
import './Attendance.css';
import axios from 'axios';
import { LuArrowDownUp } from "react-icons/lu";

const Attendance = ({ move }) => {
  const [data, setData] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const BaseUrl = 'https://amsserver.onrender.com';

  const storeData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/getdata`);
      setData(response.data);
      setOnLoad(false);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setOnLoad(true);
    storeData();
  }, []);

  return (
    <div className='attendencepagecontainer'>
      <div className='insidecontainer'>
        <div className='pagetopcontaioner'>
          <div className='testingwidth'>
            <div className='excelandpdfcontainer'>
              <h5 className='exandpditem'>Excel</h5>
              <h5 className='exandpditem'>PDF</h5>
            </div>
            <div>
              <label className='searchlabel'>Search:</label>
              <input className='inputboxforsearch' type="text" />
            </div>
          </div>
        </div>

        <div className='tabletopcontainer'>
          <table className='tabletag'>
            <thead>
              <tr className='trstyle bgstyle'>
                <th className='singlestyle'><p>Date</p><LuArrowDownUp className='img' color='white' /></th>
                <th className='empstyle'><h4>EmpID</h4><LuArrowDownUp className='img' color='white' /></th>
                <th className='singlestyle'><h4>Name</h4><LuArrowDownUp className='img' color='white' /></th>
                <th className='attendancestyletemp'><h4>Attendance</h4><LuArrowDownUp className='img' color='white' /></th>
                <th className='singlestyle'><h4>Time In</h4><LuArrowDownUp className='img' color='white' /></th>
                <th className='timeoutstyle'><h4>Time Out</h4><LuArrowDownUp className='img' color='white' /></th>
              </tr>
            </thead>
            <tbody>
              {onLoad && (
                <tr><td colSpan="6">Loading.....</td></tr>
              )}

              {!onLoad && data.length === 0 && (
                <tr><td colSpan="6">No data available</td></tr>
              )}

              {!onLoad && data.map((item, index) => (
                <tr className={`trstyle ${index % 2 === 0 ? '' : 'bgstyle'}`} key={index}>
                  <td className='singlestyle'>{item.date}</td>
                  <td className='empstyle'>{item.empid}</td>
                  <td className='singlestyle'>{item.name}</td>
                  <td className='attendancestyletemp'>
                    <p>{item.attendance}</p>
                    <p className='ontimestyle'>ontime</p>
                  </td>
                  <td className='singlestyle'>{item.timein}</td>
                  <td className='timeoutstyle'>{item.timeout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={move}>Log In</button>
      </div>
    </div>
  );
};

export default Attendance;
