import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Attendance from './components/Attendance';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/attendance" element={<AttendanceWrapper />} />
<Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const LoginWrapper = () => {
  const navigate = useNavigate();
  return <Login move={() => navigate('/attendance')} />;
};

const AttendanceWrapper = () => {
  const navigate = useNavigate();
  return <Attendance move={() => navigate('/')} />;
};

export default App;
