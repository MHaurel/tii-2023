import "./Activities.css";

import Activity from "../models/Activity";
import CustomDate from "../models/CustomDate";
import ActivityIcon from "../components/ActivityIcon";
import ActivitiesLineChart from "../components/ActivitiesLineChart";
import { List, Avatar, ListItem, ListItemAvatar, ListItemText, Divider, ToggleButton, ToggleButtonGroup, Paper, Typography, CircularProgress } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ActivitiesPieChart from "../components/ActivitiesPieChart";
import WeightLineChart from "../components/WeightLineChart";

const CAL_PER_KG = 7700;

function Activities() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('month');

    useEffect(() => {
        if (user !== null) {
            if (user.activities !== null) {
                const currentDate = new Date();
                const month = currentDate.getMonth();
                let activities_ = user.activities.filter((act) => act.date.getMonth() === (month+1));
                setActivities(activities_);
            } 
        } else {
            setActivities([]);
        }
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
    

    return (

        activities === null 
        
        ? <CircularProgress/>

        :

        <div className="wrapper">


            <div>
                <h1>Your last physical activities</h1>
                <h3 className="subtitle">Get a view of the last activities you performed 🏃🏼‍♀️</h3>
                <br/>

                <ToggleButtonGroup
                    orientation="horizontal"
                    color="secondary"
                    value={filter}
                    exclusive
                    onChange={handleFilterChange}
                    aria-label="DateFilter"
                >
                    <ToggleButton value="month">This month</ToggleButton>
                    <ToggleButton value="year">This year</ToggleButton>
                    <ToggleButton value="all">All time</ToggleButton>
                </ToggleButtonGroup>

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
                                <ListItem key={act.uuid}>
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
                    <Typography variant="h6" component="h2">Evolution of your weight {filter !== 'all' ? "this " + filter : 'since you started'}</Typography>
                    <WeightLineChart activities={activities}/> 
                    <br/>
                    <Typography variant="h6" component="h2">Calories lost  {filter !== 'all' ? "this " + filter : 'since you started'}</Typography>              
                    <ActivitiesLineChart activities={activities} width={500} height={300}/>
                    <br/>
                    <Typography variant="h6" component="h2">Activities performed {filter !== 'all' ? "this " + filter : "since you started"}</Typography>
                    <ActivitiesPieChart activities={activities}/> 
                </Paper>
            </div>
        </div>
    )
}

export default Activities;