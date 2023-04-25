import Paper from '@mui/material/Paper';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Paper className='footer'>
        <div className='footerDiv'>
           <div>
                <img className='websiteLogo' src={process.env.PUBLIC_URL +'/images/FitTrack.png'} alt='FitTrack Logo'/>
                <p>135 Santa's avenue</p>
                <p>Lapland</p>
                <p>01483 319 533</p>
           </div> 

           <div className='socialMedia' >
                <div className='brandsLogo'>
                    <a href="#"><img className='logo' src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt='Facebook Logo'/></a>
                    <a href="#"><img className='logo' src={process.env.PUBLIC_URL + '/images/icons/tweeterLogo.png'} alt='Tweeter Logo'/></a>
                </div>
                <p>&copy;Copyright. All rights reserved.</p>
           </div>

           <div className='siteMap'>
               
                <a href='/'>Home</a>
                <a href='activities'>Activities</a>
                {/* HREF to be determined */}
                <a>Profile</a> 
           </div>
        </div>
    </Paper>
  );
}

export default Footer;