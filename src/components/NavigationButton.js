import "./NavigationButton.css";
import ButtonBase from '@mui/material/ButtonBase';

function NavigationButton({label, icon, onClick, active}) {
    return (
        <ButtonBase sx={{backgroundColor: active ? "#70D9FF" : "transparent"}} onClick={onClick} className="navigationButton">
            <img src={process.env.PUBLIC_URL + `images/icons/${icon}.png`} alt="Navigation Icon"/>
            <p>{label}</p>
        </ButtonBase>
    )
}

export default NavigationButton;