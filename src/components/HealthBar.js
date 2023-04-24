import { filledInputClasses } from "@mui/material";
import "./HealthBar.css"

function HealthBar({fillPercentage}) {
    // fillPercentage is a percentage defining the progress of the health bar
    let color = "green";
    if (fillPercentage < 75 && fillPercentage >= 50) {
        color = "yellow";
    } else if (fillPercentage < 50 && fillPercentage >= 25) {
        color = "orange";
    } else if (fillPercentage < 25) {
        color = "red";
    }

    return (
        <div className='container'>
            <div className='bar' style={{width: fillPercentage + "%", backgroundColor: color}}></div>
        </div>
    )
}

export default HealthBar