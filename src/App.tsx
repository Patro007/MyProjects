import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MasterLayout from './components/Layout';
import { Typography } from '@mui/material';
import ToDoListBoard from './components/ToDoListBoard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/login" element={
        !isAuthenticated ? <Login onLogin={login} /> : <Navigate to="/dashboard" />
      } />
      
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <MasterLayout onLogout={logout} /> : <Navigate to="/login" />}
      >
        <Route index element={<Typography variant="h4">Home Content</Typography>} />
        <Route path="settings" element={<Typography variant="h4">Settings Content</Typography>} />
        <Route path="ToDoListBoard" element = {<ToDoListBoard/>} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
