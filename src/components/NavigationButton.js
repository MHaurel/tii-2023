import "./NavigationButton.css";
import ButtonBase from '@mui/material/ButtonBase';

function NavigationButton() {
    return (
        <ButtonBase sx={{backgroundColor: "#D9E7CB"}} className="navigationButton">
            <img src={process.env.PUBLIC_URL + "images/logout.png"} alt="Navigation Icon"/>
            <p>Logout</p>
        </ButtonBase>
    )
}

export default NavigationButton;