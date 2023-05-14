import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import "./Signup.css";
import { AuthContext } from '../contexts/AuthContext';

function Signup() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser, signup} = useContext(AuthContext);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignUp = () => {
        signup(firstName, lastName, email, password);
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-logo">
                    <img src={process.env.PUBLIC_URL + '/images/FitTrack.png'} alt="logo" />
                </div>

                <h2 className="signup-title"> Sign Up </h2>

                <Box component="form" sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">

                    <div className='signup-box'>
                        <TextField value={firstName} onInput={e => setFirstName(e.target.value)} id="first-name" label="First Name" variant="standard" color='secondary' />
                    </div>

                    <div className='signup-box'>
                        <TextField value={lastName} onInput={e => setLastName(e.target.value)} id="last-name" label="Last Name" variant="standard" color='secondary' />
                    </div>
                    
                    <div className='signup-box'>
                        <TextField value={email} onInput={e => setEmail(e.target.value)} id="email-phone" label="Email or Phone Number" variant="standard" color='secondary'/>
                    </div>

                    <div className='signup-box'>
                        <FormControl variant="standard" color='secondary'>
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

                    <div className='signup-box'>
                        <FormControl variant='standard' color='secondary'>
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
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

                    <div className='signup-box'>
                        <Button variant='contained' color='secondary' onClick={handleSignUp} size='large'>Sign Up</Button>
                    </div>

                    <div className='signup-box' style={{marginBottom: '24px'}}>
                        <Link href='/login' underline='always' color='inherit' sx={[{ '&:hover': { textDecoration: 'none' } }]}> Already have an account ? Log in </Link>
                    </div>

                    <Divider>or</Divider>

                    <div className='signup-box'>
                        <Button variant="outlined" color='secondary' startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/googleLogo.png'} alt="google icon" />} sx={{ marginRight: '8px'}} >
                            Sign up with Google
                        </Button>
                        <Button variant="outlined" color='secondary' startIcon={<Avatar src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt="facebook icon" />} sx={{ marginLeft: '8px'}} >
                            Sign up with Facebook
                        </Button>
                    </div>

                </Box>
            </div>

            <div className="signup-illustration">
                <img src={process.env.PUBLIC_URL + '/images/weightIllustration1.png'} alt="weight illustration" />
            </div>
        </div>
    );
}

export default Signup;