import "./Activities.css";

import Activity from "../models/Activity";
import CustomDate from "../models/CustomDate";
import ActivityIcon from "../components/ActivityIcon";

import ActivityCard from "../components/ActivityCard";
import ActivitiesLineChart from "../components/ActivitiesLineChart";
import SegmentedButtonsFilterDate from "../components/SegmentedButtonsFilterDate";
import { List, Avatar, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import HelpIcon from "../components/HelpIcon";
import { AccessAlarm } from "@mui/icons-material";

function Activities() {

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
                <h1>Vos dernières activités physiques</h1>
                <h3 className="subtitle">Retrouvez les dernières activités que vous avez effectué 🏃🏼‍♀️</h3>
                <br/>
                {/* <h4 style={{color: "red"}}>Segmented buttons here</h4> */}
                <SegmentedButtonsFilterDate/>
                {/* {
                    activities.map((act, i) => {
                        return <ActivityCard activity={act}/>
                    })
                } */}

                <List 
                    sx={{
                        width: '100%',
                        minWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                {
                    activities.map((act, i) => {
                        return (
                            <>
                                <ListItem>
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