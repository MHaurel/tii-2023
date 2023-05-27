import HomePageAnimation from "../components/HomePageAnimation";
import "./Home.css";
import { Card, CardContent, CircularProgress, LinearProgress, Paper, Typography } from "@mui/material";
import Activity from "../models/Activity";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Person from "../models/Person";
import CustomDate from "../models/CustomDate";
import { useJwt } from "react-jwt";
import ActivitiesLineChart from "../components/ActivitiesLineChart";


function Home() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser, signup, refresh} = useContext(AuthContext);

    if (authToken === null) {
        return <Navigate to="/login"/>
    }

    return (

        /**
         * CONSIDER Ternary condition
         *  if the user is null (not loaded) : circular progress or gif
         *  if the user is non null (loaded) : display the current layout below
         */

        <div>

            {
                user === null ?
                    <CircularProgress/>
                : 
                <div>
                    <div className="animation">
                        <Paper elevation={3} sx={{padding: 2}}>
                            <HomePageAnimation/>
                        </Paper>
                    </div>
                    
                    <div className="welcome"> 
                        <h2>Hello {user.firstname}</h2>
                        <p>Here are your weekly stats:</p>
                        
                        <div className="stats">
                            <div >
                                <Card sx={{borderColor: "#B6C3D7", backgroundColor: "secondary.light"}} className="styleCard" variant="outlined" >
                                    <CardContent className="statCard">
                                        <span>436</span>
                                        <p>kcal lost this week</p>
                                    </CardContent>
                                </Card>
                            </div>
                            
                            <div>
                                <Card sx={{borderColor: "#B6C3D7", backgroundColor: "secondary.light"}} className="styleCard" variant="outlined">
                                    <CardContent className="statCard">
                                        <span>3</span>
                                        <p>activities performed this week</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <Card sx={{borderColor: "#B6C3D7", backgroundColor: "secondary.light"}} className="styleCard" variant="outlined">
                                    <CardContent className="statCard">
                                        <span>20000</span>
                                        <p>steps walked</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>


                    <div className="homeLineChart">
                        <Typography variant="h6" component="h2">Calories lost since you started: </Typography>
                        <br/>
                        {
                            user === null ? <CircularProgress/> : <ActivitiesLineChart activities={user.activities} width={800} height={500}/>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;