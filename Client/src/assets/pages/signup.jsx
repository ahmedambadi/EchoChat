import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const signup = () => {
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
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          className="w-full mb-5"
          sx={{ mt: 2 }}
        />
        <Button variant="outlined" className="w-full"
        sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default signup;