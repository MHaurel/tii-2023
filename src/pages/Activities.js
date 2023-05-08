import "./Activities.css";

import Activity from "../models/Activity";
import CustomDate from "../models/CustomDate";
import ActivityIcon from "../components/ActivityIcon";
import ActivitiesLineChart from "../components/ActivitiesLineChart";
import SegmentedButtonsFilterDate from "../components/SegmentedButtonsFilterDate";
import { List, Avatar, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Activities() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

    if (authToken === null) {
        return <Navigate to="/login"/>
    }

    let activitiesData = []
    user.activities.forEach((act, i) => {
        activitiesData.push({date: new CustomDate(act.date).getDate(), consumedCalories: act.consumedCalories})
    });

    return (
        <div className="wrapper">
            <div>
                <h1>Your last physical activities</h1>
                <h3 className="subtitle">Get a view of the last activities you performed 🏃🏼‍♀️</h3>
                <br/>
                <SegmentedButtonsFilterDate/>

                <List 
                    sx={{
                        width: '100%',
                        minWidth: 360,
                        bgcolor: 'background.paper',
                        marginTop: 2,
                        marginBottom: 2
                    }}
                >
                {
                    user.activities.map((act, i) => {
                        return (
                            <>
                                <ListItem key={act.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ActivityIcon type={act.typeOfActivity}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={act.getTypeOfActivity()} secondary={act.consumedCalories + "kcal lost" + " - " + act.date}/>
                                </ListItem>
                                {i+1 === user.activities.length ? <></> : <Divider variant="inset" component="li"/>}
                            </>
                        )
                    })
                }
                </List>
            </div>
            <div className="data-vis">
                <ActivitiesLineChart data={activitiesData}/>
            </div>
        </div>
    )
}

export default Activities;