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
    const {authToken, setAuthToken, login} = useContext(AuthContext);

    if (authToken === null) {
        return <Navigate to="/login"/>
    }

    // TO TEST
    let activity = new Activity(
        1,
        1,
        "footing",
        55,
        0,
        469,
        "2022-01-02T17:45:21.000Z"
    );

    let activity2 = new Activity(
        1,
        1,
        "bike",
        55,
        0,
        203,
        "2022-02-02T17:45:21.000Z"
    );
    
    let activities = [
        activity, activity2, activity, activity, activity, activity2, activity, activity
    ];

    let activitiesData = []
    activities.forEach((act, i) => {
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
                    activities.map((act, i) => {
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
                                {i+1 === activities.length ? <></> : <Divider variant="inset" component="li"/>}
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