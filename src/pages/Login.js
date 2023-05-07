import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import "./Login.css";
import { AuthContext } from '../contexts/AuthContext';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {authToken, setAuthToken, login} = useContext(AuthContext);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src={process.env.PUBLIC_URL + '/images/FitTrack.png'} alt="logo" />
                </div>

                <h2 className="login-title"> Log In </h2>

                <Box component="form" sx={{"& > :not(style)": { m: 1 }}} noValidate autoComplete="off">
                    <div className='login-box'>
                        <TextField value={email} onInput={e => setEmail(e.target.value)} id="email-phone" label="Email or Phone Number" variant="standard" />
                        <FormControl variant="standard" >
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                value={password}
                                onInput={e => setPassword(e.target.value)}
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <div className='login-box'>
                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                        <Link href="#" underline="always" color="inherit" sx={[{ '&:hover': { fontWeight: 'bold' } }]}> Forgot password? </Link>
                    </div>

                    <div className='login-box'>
                        <Button variant="contained" onClick={() => login(email, password)}>Log In</Button>
                    </div>

                    ------------------------------------------------------ or ------------------------------------------------------

                    <div className='login-box'>
                        <Button variant="outlined" startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/googleLogo.png'} alt="google icon" />}>
                            Log in with Google
                        </Button>
                        <Button variant="outlined" startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt="facebook icon" />}>
                            Log in with Facebook
                        </Button>
                    </div>
                </Box>
            </div>

            <div className="login-illustration">
                <img src={process.env.PUBLIC_URL + '/images/weightIllustration1.png'} alt="weight illustration" />
            </div>
        </div>
    );
}

export default Login;