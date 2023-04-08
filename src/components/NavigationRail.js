import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import NavigationButton from "./NavigationButton";
import Fab from "@mui/material/Fab";
import ThemeIcon from "./ThemeIcon";

import "./NavigationRail.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationRail({handleChangeTheme, theme}) {
    const [homeActive, setHomeActive] = useState(true);
    const [chartActive, setChartActive] = useState(false);

    const navigate = useNavigate();

    const handleChangeRouteHome = () => {
        if (!homeActive) {
            setHomeActive(true)
            setChartActive(false);
            navigate("/");
        }
    }

    const handleChangeRouteChart = () => {
        if (!chartActive) {
            setChartActive(true)
            setHomeActive(false)
            navigate("/activities");
        }
    }

    return (
        <div>
            <Drawer className="navigationRail" variant="permanent" anchor="left" elevation={0} open={true}>
                <Avatar sx={{width: 48, height: 48}} src={process.env.PUBLIC_URL + "/images/avatar/28.png"}/>
                <div className="navigation-buttons">
                    <NavigationButton label="Home" icon="home" active={homeActive} onClick={handleChangeRouteHome}/>
                    <NavigationButton label="Activities" icon="chart" active={chartActive} onClick={handleChangeRouteChart}/>
                    <NavigationButton label="Logout" icon="logout"/>
                </div>
                <Fab onClick={handleChangeTheme}>
                    <ThemeIcon theme={theme}/>
                </Fab>
            </Drawer>
        </div>
    )
}

export default NavigationRail;