import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { deepOrange } from "@mui/material/colors";
import NavigationButton from "./NavigationButton";
import Fab from "@mui/material/Fab";
import ThemeIcon from "./ThemeIcon";

import "./NavigationRail.css"

import { useState } from "react";

function NavigationRail() {
    const [theme, setTheme] = useState("light");

    const handleClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div>
            <Drawer className="navigationRail" variant="permanent" anchor="left" elevation={0} open={true}>
                <Avatar sx={{width: 32, height: 32}}/>
                <div className="navigation-buttons">
                    <NavigationButton/>
                    <NavigationButton/>
                    <NavigationButton/>
                    <NavigationButton/>
                </div>
                <Fab onClick={handleClick}>
                    <ThemeIcon theme={theme}/>
                </Fab>
            </Drawer>
        </div>
    )
}

export default NavigationRail;