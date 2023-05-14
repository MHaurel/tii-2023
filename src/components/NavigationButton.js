import { Button, Typography } from "@mui/material";
import "./NavigationButton.css";

function NavigationButton({label, icon, disabled, onClick, active, theme}) {
    const filePath = theme.palette.mode === 'dark' ? `${icon}_light.png` : `${icon}_dark.png`;

    return (
        <Button color="secondary" disabled={disabled} sx={{
                backgroundColor: (active && !disabled) ? "secondary.light" : "transparent",
                '&:hover' : {
                    backgroundColor: 'secondary.main',
                    color: "#000"
                },
            }} onClick={onClick} className="navigationButton">
            <img src={process.env.PUBLIC_URL + `images/icons/${filePath}`} alt="Navigation Icon"/>
            <p>{label}</p>
        </Button>
    )
}

export default NavigationButton;