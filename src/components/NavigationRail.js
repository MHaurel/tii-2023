import Drawer from "@mui/material/Drawer";
import NavigationButton from "./NavigationButton";
import Fab from "@mui/material/Fab";
import ThemeIcon from "./ThemeIcon";
import AvatarButton from "./AvatarButton";

import "./NavigationRail.css"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NavigationRail({handleChangeTheme, theme}) {
    const [homeActive, setHomeActive] = useState(false);
    const [chartActive, setChartActive] = useState(false);
    const selectedFile = localStorage.getItem("avatarImage");

    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

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
        navigate("/profile");
    }

    const handleChangeRouteLogout = () => {
        setHomeActive(false)
        setChartActive(false);

        clearTokens();

        navigate("/login");
    }

    return (
        <div>
            <Drawer className="navigationRail" variant="permanent" anchor="left" elevation={0} open={true}>
                {
                    authToken === null ? <div style={{width: 48, height: 48}}></div> : <AvatarButton src={selectedFile === null ? `${process.env.PUBLIC_URL}/images/avatar/10-upscaled.png` : selectedFile} onClick={handleChangeRouteProfil} />
                }
                {/* <AvatarButton src={selectedFile} onClick={handleChangeRouteProfil} /> */}
                <div className="navigation-buttons">
                    <NavigationButton label="Home" icon="home" disabled={sidebarDisabled} active={homeActive} onClick={handleChangeRouteHome} theme={theme}/>
                    <NavigationButton label="Activities" icon="chart" disabled={sidebarDisabled} active={chartActive} onClick={handleChangeRouteChart} theme={theme}/>
                    <NavigationButton label="Logout" icon="logout" disabled={sidebarDisabled} onClick={handleChangeRouteLogout} theme={theme}/>
                </div>
                <Fab onClick={handleChangeTheme}>
                    <ThemeIcon theme={theme}/>
                </Fab>
            </Drawer>
        </div>
    )
}

export default NavigationRail;