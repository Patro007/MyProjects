import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(); // Call the function from App.jsx to update state
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper sx={{ p: 4, width: 350, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField fullWidth label="Username" margin="normal" defaultValue="admin" />
          <TextField fullWidth label="Password" type="password" margin="normal" defaultValue="password" />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Sign In</Button>
        </form>
      </Paper>
    </Box>
  );
}
