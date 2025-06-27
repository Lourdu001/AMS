import React, { useState, useEffect } from 'react';
import './Attendance.css';
import axios from 'axios';
import { LuArrowDownUp } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
const Attendance = ({ move }) => {
  const [data, setData] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const BaseUrl = 'https://amsserver.onrender.com';
  const [filter, setFilter] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const logout = () => {
  localStorage.removeItem('token');
  move(); 
};
  const storeData = async () => {
    try {
      const token = localStorage.getItem('token');
const response = await axios.get(`${BaseUrl}/getdata`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
     
      setData(response.data);
      setOnLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setOnLoad(true);
    storeData();
  }, []);

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
        item.attendance?.toString().includes(searchtext) ||
        item.date?.toString().includes(searchtext) ||            
        item.timein?.toString().toLowerCase().includes(lowerSearch) || 
        item.timeout?.toString().toLowerCase().includes(lowerSearch)   
        )
      );
    }
  }, [searchtext, data]);
  return (
    <div className='attendencepagecontainer'>
      <div className='insidecontainer'>
       <div className='pagetopcontaioner'>
         <div className='testingwidth changelogout'>
          <div onClick={logout} className="logout-btn"><CiLogout color='white' />Logout</div>
        </div>
       </div>
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
                  <tr className='trstyle ' key={index}>
                    <td className={`singlestyle ${index % 2 === 0 ? '' : 'bgstyle'}`}  >{item.date}</td>
                    <td  className={`empstyle ${index % 2 === 0 ? '' : 'bgstyle'}`}>{item.empid}</td>
                    <td className={`singlestyle ${index % 2 === 0 ? '' : 'bgstyle'}`}>{item.name}</td>
                    <td  className={`attendancestyletemp ${index % 2 === 0 ? '' : 'bgstyle'}`}>
                      <p>{item.attendance}</p>
                      <p className='ontimestyle'>ontime</p>
                    </td>
                    <td className={`singlestyle ${index % 2 === 0 ? '' : 'bgstyle'}`}>{item.timein}</td>
                    <td  className={`timeoutstyle ${index % 2 === 0 ? '' : 'bgstyle'}`}>{item.timeout}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
