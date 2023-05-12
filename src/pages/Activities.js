import "./Activities.css";

import Activity from "../models/Activity";
import CustomDate from "../models/CustomDate";
import ActivityIcon from "../components/ActivityIcon";
import ActivitiesLineChart from "../components/ActivitiesLineChart";
import SegmentedButtonsFilterDate from "../components/SegmentedButtonsFilterDate";
import { List, Avatar, ListItem, ListItemAvatar, ListItemText, Divider, ToggleButton, ToggleButtonGroup, Paper } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ActivitiesPieChart from "../components/ActivitiesPieChart";

function Activities() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('month');

    useEffect(() => {
        const currentDate = new Date();
        const month = currentDate.getMonth();
        let activities_ = user.activities.filter((act) => act.date.getMonth() === (month+1));
        setActivities(activities_);
    }, [])

    if (authToken === null) {
        return <Navigate to="/login"/>
    }

    const handleFilterChange = (e, v) => {
        setFilter(v)

        const currentDate = new Date();

         if (v === "month") {
            // Activities only this month
            console.log("Filter is:", filter)
            const month = currentDate.getMonth();
            console.log("month", month + 1)
            console.log("user month", user.activities[0].date.getMonth())
            let activities_ = user.activities.filter((act) => act.date.getMonth() === (month+1));
            setActivities(activities_);
        } else if (v === "year") {
            // Activities only this year
            const year = currentDate.getYear();
            let activities_ = user.activities.filter((act) => act.date.getYear() === (year+1));
            setActivities(user.activities);
        } else {
            setActivities(user.activities);
        }
    }

    let activitiesData = []
    activities.forEach((act, i) => {
    // activities.forEach((act, i)) => {
        activitiesData.push({date: act.getDate(), consumedCalories: act.consumedCalories})
    });

    let activitiesDataPieDict = {}
    let activitiesDataPie = []
    activities.forEach((act, i) => {
    // activities.forEach((act, i)) => {
        if (act.typeOfActivity in activitiesDataPieDict) {
            activitiesDataPieDict[act.typeOfActivity] += 1
        } else {
            activitiesDataPieDict[act.typeOfActivity] = 1
        }
    })
    
    for (let activity in activitiesDataPieDict) {
        activitiesDataPie.push({name: activity, value: activitiesDataPieDict[activity]})
    }

    return (
        <div className="wrapper">
            <div>
                <h1>Your last physical activities</h1>
                <h3 className="subtitle">Get a view of the last activities you performed 🏃🏼‍♀️</h3>
                <br/>

                <ToggleButtonGroup
                    orientation="horizontal"
                    color="primary"
                    value={filter}
                    exclusive
                    onChange={handleFilterChange}
                    aria-label="DateFilter"
                >
                    {/* <ToggleButton value="week">This week</ToggleButton> */}
                    <ToggleButton value="month">This month</ToggleButton>
                    <ToggleButton value="year">This year</ToggleButton>
                    <ToggleButton value="all">All time</ToggleButton>
                </ToggleButtonGroup>

                {/* <SegmentedButtonsFilterDate/> */}

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
                                    <ListItemText primary={act.getTypeOfActivity()} secondary={act.consumedCalories + "kcal lost" + " - " + act.getDate()}/>
                                </ListItem>
                                {i+1 === user.activities.length ? <></> : <Divider variant="inset" component="li"/>}
                            </>
                        )
                    })
                }
                </List>
            </div>
            <div className="data-vis">
                <Paper sx={{width:600, paddingY: 10, marginBottom:10}} className="chartWrapper">                
                    <ActivitiesLineChart data={activitiesData}/>
                    <ActivitiesPieChart data={activitiesDataPie}/>
                </Paper>
            </div>
        </div>
    )
}

export default Activities;