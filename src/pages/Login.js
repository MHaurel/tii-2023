import React, { useContext, useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import "./Login.css";
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
    const { authToken, setAuthToken, login } = useContext(AuthContext);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const email_ = localStorage.getItem("email");
        const password_ = localStorage.getItem("password");

        setEmail(email_);
        setPassword(password_);

        // TO DELETE --> FOR DEV ONLY
        // handleLogin()
    }, [])

    const handleLogin = () => {
        // Save input fields in LocalStorage
        if (saveInfo) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password)
        } else {
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
        }

        login(email, password)

        // TO DELETE --> FOR DEV ONLY
        // login(email, password);
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src={process.env.PUBLIC_URL + '/images/FitTrack.png'} alt="logo" />
                </div>

                <h2 className="login-title"> Log In </h2>

                <Box component="form" sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
                    
                    <div className='login-box'>
                        <TextField value={email} onInput={e => setEmail(e.target.value)} id="email-phone" label="Email or Phone Number" variant="standard" color='secondary' />
                    </div>

                    <div className='login-box'>
                        <FormControl variant="standard" color='secondary' >
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
                        <FormControlLabel control={<Checkbox onChange={(e) => setSaveInfo(e.target.checked)} color='secondary' />} label="Remember me" />
                    </div>

                    <div className='login-box' style={{marginBottom: '24px'}}>
                        <Link style={{color: 'black'}} href="#" underline="always" color="inherit" sx={[{textAlign: 'left'}, { '&:hover': { textDecoration: 'none' } }]}> Forgot password? </Link>
                    </div>

                    <div className='login-box'>
                        <Button variant='contained' size='large' onClick={handleLogin} color='secondary'>Log In</Button>
                    </div>

                    <div className='login-box'>
                        <Link style={{color: 'black'}} to="/signup" underline="always" color="inherit" sx={[{ '&:hover': { textDecoration: 'none' } }]}> Don't have an account? Sign up </Link>
                    </div>

                    <Divider>or</Divider>

                    <div className='login-box'>
                        <Button variant="outlined" startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/googleLogo.png'} alt="google icon" />} sx={{ marginRight: '8px'}} color='secondary' >
                            Log in with Google
                        </Button>
                        <Button variant="outlined" startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt="facebook icon" />} sx={{ marginLeft: '8px'}} color='secondary' >
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