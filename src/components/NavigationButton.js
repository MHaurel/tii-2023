import { Paper } from "@mui/material";
import "./NavigationButton.css";
import ButtonBase from '@mui/material/ButtonBase';

function NavigationButton({label, icon, onClick, active, theme}) {
    const filePath = theme.palette.mode === 'dark' ? `${icon}_light.png` : `${icon}_dark.png`;

    return (
        // <ButtonBase sx={{backgroundColor: active ? "#ADE9FF" : "transparent"}} onClick={onClick} className="navigationButton">
            // <img src={process.env.PUBLIC_URL + `images/icons/${filePath}`} alt="Navigation Icon"/>
            // <p>{label}</p>
        // </ButtonBase>
        <Paper elevation={2} sx={{backgroundColor: active ? "#ADE9FF" : "transparent"}} onClick={onClick} className="navigationButton">
            <img src={process.env.PUBLIC_URL + `images/icons/${filePath}`} alt="Navigation Icon"/>
            <p>{label}</p>
        </Paper>
    )
}

export default NavigationButton;