import HomePageAnimation from "../components/HomePageAnimation";
import "./Home.css";
import { Card, CardContent } from "@mui/material";
import HomeLineChart from "../components/HomeLineChart";
import Activity from "../models/Activity";

function Home() {

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
        "footing",
        55,
        0,
        203,
        "2022-01-02T17:45:21.000Z"
    );
    
    let activities = [
        activity, activity2, activity, activity, activity, activity2
    ];

    let activitiesData = []
    activities.forEach((act, i) => {
        activitiesData.push({date: i, consumedCalories: act.consumedCalories})
    });

    return (
        <div>
            <div className="animation">
                <HomePageAnimation/>
            </div>
            
            <div className="welcome"> 
                <h2>Hello José</h2>
                <p>Here are your weekly stats:</p>
                
                <div className="stats">
                
                    <div >
                        <Card sx={{borderColor: "#B6C3D7"}} className="styleCard" variant="outlined">
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
                <HomeLineChart data={activitiesData}/>
            </div>
        </div>
    )
}

export default Home;