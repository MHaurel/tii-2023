import HomePageAnimation from "../components/HomePageAnimation";
import "./Home.css";
import { Card, CardContent, CircularProgress, LinearProgress, Paper } from "@mui/material";
import HomeLineChart from "../components/HomeLineChart";
import Activity from "../models/Activity";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Person from "../models/Person";
import CustomDate from "../models/CustomDate";


function Home() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

    useEffect(() => {
        if (user === null) {
            // console.log("userid is null")
            // console.log("auth token: ", authToken)
            const bearerConfig = {
                headers: { 'Authorization': `Bearer ${authToken}` }
            };
    
            axios.get("https://fake-health-data-api.shrp.dev/people?filterBy=firstname&filterValue=Sadie", bearerConfig)
                .then(response => {
                    let data = response.data.people[0];
                    // console.log(data)
                    let user_ = new Person(
                        data.id,
                        data.gender,
                        data.firstname,
                        data.lastname,
                        data.birthyear,
                        data.height,
                        data.weightStart,
                        data.weightGoal,
                        data.bmiStart,
                        data.bmiGoal,
                        data.activityProfile
                    )
                    // console.log(user_)
                    // setUser(user_);

                    axios.get(`https://fake-health-data-api.shrp.dev/people/${user_.id}/physical-activities`, bearerConfig)
                        .then(response_ => {
                            let data_ = response_.data.people.physicalActivities;
                            let physicalActivities = [];
                            data_.forEach((item) => {
                                let act = new Activity(
                                    item.id,
                                    user_.id,
                                    item.typeOfActivity,
                                    item.duration,
                                    item.numberOfSteps,
                                    item.consumedCalories,
                                    item.date
                                )
                                physicalActivities.push(act);
                            })
                            user_.activities = physicalActivities;
                            setUser(user_);
                        })
                        .catch(err => {
                            console.log("Could not fetch the activities of the user")
                            // Make a toast instead
                        })
                })
                .catch(err => {
                    console.log("Could not fetch the data for the user");
                    // Make a toast instead
                })
        }
    }, [])

    if (authToken === null) {
        return <Navigate to="/login"/>
    }

    let activitiesData = [];
    if (user !== null) {
        if (user.activities !== null) {
            user.activities.forEach((act, i) => {
                activitiesData.push({date: new CustomDate(act.date).getDate(), consumedCalories: act.consumedCalories})
            });
        }
        
    }

    return (

        /**
         * CONSIDER Ternary condition
         *  if the user is null (not loaded) : circular progress or gif
         *  if the user is non null (loaded) : display the current layout below
         */

        <div>
            <div className="animation">
                <Paper elevation={3} sx={{padding: 2}}>
                    <HomePageAnimation/>
                </Paper>
            </div>
            
            <div className="welcome"> 
                {
                    user === null ? <LinearProgress/> : <h2>Hello {user.firstname}</h2>
                }
                {/* <h2>Hello {user.firstname}</h2> */}
                <p>Here are your weekly stats:</p>
                
                <div className="stats">
                    <div >
                        <Card sx={{borderColor: "#B6C3D7"}} className="styleCard" variant="outlined" color="primary">
                            <CardContent className="statCard">
                                <span>436</span>
                                <p>kcal lost this week</p>
                            </CardContent>
                        </Card>
                    </div>
                    
                    <div>
                        <Card sx={{borderColor: "#B6C3D7"}} className="styleCard" variant="outlined">
                            <CardContent className="statCard">
                                <span>3</span>
                                <p>activities performed this week</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <Card sx={{borderColor: "#B6C3D7"}} className="styleCard" variant="outlined">
                            <CardContent className="statCard">
                                <span>20000</span>
                                <p>steps walked</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>


            <div className="homeLineChart">
                {
                    user === null ? <CircularProgress/> : <HomeLineChart data={activitiesData}/>
                }
                {/* <HomeLineChart data={activitiesData}/> */}
            </div>
        </div>
    )
}

export default Home;