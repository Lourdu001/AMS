import React, { useState, useEffect } from 'react';
import './Attendance.css';
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import { LuArrowDownUp } from "react-icons/lu";
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
    const handleExport = async () => {
          const fileName = 'users.xlsx';

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    const headers = Object.keys(data[0]).map(key => key.toUpperCase());
    worksheet.addRow(headers);

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell(cell => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF26A69A' } 
      };
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });

    data.forEach((item, index) => {
      const row = worksheet.addRow(Object.values(item));

      if ((index + 1) % 2 === 0) {
        row.eachCell(cell => {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFF5F5F5' } 
          };
        });
      }

      row.eachCell((cell, colNumber) => {
        cell.alignment = {
          horizontal: typeof cell.value === 'number' ? 'right' : 'left',
          vertical: 'middle'
        };
      });
    });

    worksheet.columns.forEach(column => {
      let maxLength = 10;
      column.eachCell({ includeEmpty: true }, cell => {
        const value = cell.value ? cell.value.toString().length : 10;
        if (value > maxLength) maxLength = value;
      });
      column.width = maxLength + 2;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, fileName);
  };
    const handleDownload = () => {
   const doc = new jsPDF();

    const columns = Object.keys(data[0]).map(key => ({ header: key.toUpperCase(), dataKey: key }));

    doc.autoTable({
      columns,
      body: data,
      startY: 20,
      headStyles: { fillColor: [22, 160, 133] }
    });

    doc.save("data.pdf");
  };
  return (
    <div className='attendencepagecontainer'>
      <div className='insidecontainer'>
       <div className='pagetopcontaioner'>
        <div className='testingwidth bg'>
         <div className="dropdown">
    <PiDotsThreeOutlineVerticalBold color="white" className="dotbutton" />
    <div className="button">
      <div className="content">
      <div className="flexset"   onClick={logout}>
          <div><CiLogout color="white" /></div>
        <div>Log out</div>
      </div>
        </div>
    </div>
  </div>
  </div>
       </div>
     
        <div className='pagetopcontaioner'>
          
          <div className='testingwidth'>
            <div className='excelandpdfcontainer'>
              <h5 className='exandpditem' onClick={handleExport}>Excel</h5>
              <h5 className='exandpditem' onClick={handleDownload}>PDF</h5>
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
