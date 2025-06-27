
// import React, { useState, useEffect } from 'react';
// import './Attendance.css';
// import axios from 'axios';
// import { LuArrowDownUp } from "react-icons/lu";

// const Attendance = ({ move }) => {
//   const [data, setData] = useState([]);
//   const [onLoad, setOnLoad] = useState(false);
//   const BaseUrl = 'https://amsserver.onrender.com';
//   const [filter, setfilter] = useState([]);
//   const [searchtext, setsearchtext] = useState("");
// //   const searchfunction = () =>{
// // setfilter(data.filter(
// //   (item)=>item.name==searchtext
// // ));
// //   }

//   const storeData = async () => {
//     try {
//       const response = await axios.get(`${BaseUrl}/getdata`);
//       setData(response.data);
//       setOnLoad(false);
//       console.log("Data fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     setOnLoad(true);
//     storeData();
//   }, []);
// useEffect(() => {
//   if (searchtext.trim() === "") {
//     setfilter([]);
//   } else {
//     setfilter(
//       data.filter(item =>
//         item.name.toLowerCase().includes(searchtext.toLowerCase()) ||
//         item.empid.toLowerCase().includes(searchtext.toLowerCase()) ||
//         item.date.toLowerCase().includes(searchtext.toLowerCase())
//       )
//     );
//   }
// }, [searchtext, data]);

//   return (
//     <div className='attendencepagecontainer'>
//       <div className='insidecontainer'>
//         <div className='pagetopcontaioner'>
//           <div className='testingwidth'>
//             <div className='excelandpdfcontainer'>
//               <h5 className='exandpditem'>Excel</h5>
//               <h5 className='exandpditem'>PDF</h5>
//             </div>
//             <div>
//               <label className='searchlabel'>Search:</label>
//               {/* <input className='inputboxforsearch' type="text" onChange={(e)=>{setsearchtext(e.target.value);
//                 searchfunction();
//               }} /> */}
//               <input
//   className='inputboxforsearch'
//   type="text"
//   onChange={(e) => setsearchtext(e.target.value)}
// />

//             </div>
//           </div>
//         </div>

//         <div className='tabletopcontainer'>
//           <table className='tabletag'>
//             <thead>
//               <tr className='trstyle bgstyle'>
//                 <th className='singlestyle'><p>Date</p><LuArrowDownUp className='img' color='white' /></th>
//                 <th className='empstyle'><h4>EmpID</h4><LuArrowDownUp className='img' color='white' /></th>
//                 <th className='singlestyle'><h4>Name</h4><LuArrowDownUp className='img' color='white' /></th>
//                 <th className='attendancestyletemp'><h4>Attendance</h4><LuArrowDownUp className='img' color='white' /></th>
//                 <th className='singlestyle'><h4>Time In</h4><LuArrowDownUp className='img' color='white' /></th>
//                 <th className='timeoutstyle'><h4>Time Out</h4><LuArrowDownUp className='img' color='white' /></th>
//               </tr>
//             </thead>
//             <tbody>
//               {onLoad && (
//                 <tr><td colSpan="6">Loading.....</td></tr>
//               )}

//               {!onLoad && data.length === 0 && (
//                 <tr><td colSpan="6">No data available</td></tr>
//               )}
// {/* 
//               {!onLoad && data.map((item, index) => (
//                 <tr className={`trstyle ${index % 2 === 0 ? '' : 'bgstyle'}`} key={index}>
//                   <td className='singlestyle'>{item.date}</td>
//                   <td className='empstyle'>{item.empid}</td>
//                   <td className='singlestyle'>{item.name}</td>
//                   <td className='attendancestyletemp'>
//                     <p>{item.attendance}</p>
//                     <p className='ontimestyle'>ontime</p>
//                   </td>
//                   <td className='singlestyle'>{item.timein}</td>
//                   <td className='timeoutstyle'>{item.timeout}</td>
//                 </tr>
//               ))} */}
//               {!onLoad && (filter.length > 0 ? filter : data).map((item, index) => (
//   <tr className={`trstyle ${index % 2 === 0 ? '' : 'bgstyle'}`} key={index}>
//     <td className='singlestyle'>{item.date}</td>
//     <td className='empstyle'>{item.empid}</td>
//     <td className='singlestyle'>{item.name}</td>
//     <td className='attendancestyletemp'>
//       <p>{item.attendance}</p>
//       <p className='ontimestyle'>ontime</p>
//     </td>
//     <td className='singlestyle'>{item.timein}</td>
//     <td className='timeoutstyle'>{item.timeout}</td>
//   </tr>
// ))}

//             </tbody>
//           </table>
//         </div>

//         <button onClick={move}>Log In</button>
//       </div>
//     </div>
//   );
// };

// export default Attendance;
import React, { useState, useEffect } from 'react';
import './Attendance.css';
import axios from 'axios';
import { LuArrowDownUp } from "react-icons/lu";

const Attendance = ({ move }) => {
  const [data, setData] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const BaseUrl = 'https://amsserver.onrender.com';
  const [filter, setFilter] = useState([]);
  const [searchtext, setSearchtext] = useState("");

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

  // useEffect(() => {
  //   if (searchtext.trim() === "") {
  //     setFilter([]);
  //   } else {
  //     setFilter(
  //       data.filter(item =>
  //         item.name.toLowerCase().includes(searchtext.toLowerCase()) 
  //         ||item.empid.includes(parseInt(searchtext))||
  //         item.id.includes(parseInt(searchtext))||
  //         item.attendance.includes(parseInt(searchtext))
  //         // item.empid.toLowerCase().includes(searchtext.toLowerCase()) ||
  //         // item.date.toLowerCase().includes(searchtext.toLowerCase())
  //       )
  //     );
  //   }
  // }, [searchtext, data]);
  useEffect(() => {
    const lowerSearch = searchtext.toLowerCase();

  if (!lowerSearch) {
    setFilter([]);
  } else {
    setFilter(
      data.filter(item =>
        item.name?.toLowerCase().includes(lowerSearch) ||
        item.empid?.toString().includes(searchtext) ||
        item.id?.toString().includes(searchtext) ||
        item.attendance?.toString().toLowerCase().includes(lowerSearch)
      )
    );
  }
}, [searchtext, data]);

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
              <input
                className='inputboxforsearch'
                type="text"
                onChange={(e) => setSearchtext(e.target.value)}
              />
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
              {onLoad ? (
                <tr><td colSpan="6">Loading.....</td></tr>
              ) : (filter.length === 0 && searchtext !== "") ? (
                <tr><td colSpan="6">No matching records found</td></tr>
              ) : ((filter.length === 0 && data.length === 0) ? (
                <tr><td colSpan="6">No data available</td></tr>
              ) : (
                (filter.length > 0 ? filter : data).map((item, index) => (
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
                ))
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
