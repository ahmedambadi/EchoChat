import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () =>  {   
    try {
      const res = await axios.post('http://localhost:3000/rt/signup', {
          "name": username,
          "rawPassword": password,
      });
      console.log('Success:', res.data);
      navigate('/login');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    }
   
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <img
        src="/echologo.svg"
        alt="EchoChat Logo"
        className="w-60 h-auto absolute top-10 left-1/2 transform -translate-x-1/2"
      />
      <div className="flex flex-col items-center justify-center w-full max-w-xs mt-32">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="w-full"
          sx={{ mt: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          className="w-full mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          sx={{ mt: 2 }}
        />
        <Button variant="outlined" className="w-full" 
        sx={{ mt: 2 }}
        onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <a href="/login" className="block mt-3 text-blue-700">
          already have an account? login here.
        </a>
      </div>
    </div>
  );
}

export default Signup;