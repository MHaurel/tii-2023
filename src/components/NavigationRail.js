import Drawer from "@mui/material/Drawer";
import NavigationButton from "./NavigationButton";
import Fab from "@mui/material/Fab";
import ThemeIcon from "./ThemeIcon";
import AvatarButton from "./AvatarButton";

import "./NavigationRail.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationRail({handleChangeTheme, theme}) {
    const [homeActive, setHomeActive] = useState(true);
    const [chartActive, setChartActive] = useState(false);
    const selectedFile = localStorage.getItem("avatarImage");

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

    const handleChangeRouteProfil = () => {
        setHomeActive(false)
        setChartActive(false);
        navigate("/profil");
    }

    const handleChangeRouteLogout = () => {
        setHomeActive(false)
        setChartActive(false);
        navigate("/login");
    }

    return (
        <div>
            <Drawer className="navigationRail" variant="permanent" anchor="left" elevation={0} open={true}>
                <AvatarButton src={selectedFile} onClick={handleChangeRouteProfil} />
                <div className="navigation-buttons">
                    <NavigationButton label="Home" icon="home" active={homeActive} onClick={handleChangeRouteHome} theme={theme}/>
                    <NavigationButton label="Activities" icon="chart" active={chartActive} onClick={handleChangeRouteChart} theme={theme}/>
                    <NavigationButton label="Logout" icon="logout" onClick={handleChangeRouteLogout} theme={theme}/>
                </div>
                <Fab onClick={handleChangeTheme}>
                    <ThemeIcon theme={theme}/>
                </Fab>
            </Drawer>
        </div>
    )
}

export default NavigationRail;