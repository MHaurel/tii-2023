import Paper from '@mui/material/Paper';
import "./Footer.css"

function Footer() {
  return (
    <Paper className='footer'>
        <div className='footerDiv'>
           <div>
                <img className='websiteLogo' src={process.env.PUBLIC_URL +'/images/fitTrack.png'} alt='FitTrack Logo'/>
                <p>135 Santa's avenue</p>
                <p>Lapland</p>
                <p>01483 319 533</p>
           </div> 

           <div className='socialMedia' >
                <div className='brandsLogo'>
                    <img className='logo' src={process.env.PUBLIC_URL + '/images/icons/facebookLogo.png'} alt='Facebook Logo'/>
                    <img className='logo' src={process.env.PUBLIC_URL + '/images/icons/tweeterLogo.png'} alt='Tweeter Logo'/>
                </div>
                <p>&copy;Copyright. All rights reserved.</p>
           </div>

           <div className='siteMap'>
                <a>Home</a>
                <a>Activities</a>
                <a>Profile</a>
           </div>
        </div>
        
    </Paper>
  );
}

export default Footer;