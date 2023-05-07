import { Button } from "@mui/material";
import "./NavigationButton.css";

function NavigationButton({label, icon, disabled, onClick, active, theme}) {
    const filePath = theme.palette.mode === 'dark' ? `${icon}_light.png` : `${icon}_dark.png`;

    return (
        <Button disabled={disabled} sx={{
                backgroundColor: (active && disabled) ? "#ADE9FF" : "transparent",
                '&:hover' : {
                    backgroundColor: 'primary.main'
                },
            }} onClick={onClick} className="navigationButton">
            <img src={process.env.PUBLIC_URL + `images/icons/${filePath}`} alt="Navigation Icon"/>
            <p>{label}</p>
        </Button>
    )
}

export default NavigationButton;