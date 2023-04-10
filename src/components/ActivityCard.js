import { Card, CardContent } from "@mui/material";

import "./ActivityCard.css"

function ActivityCard ({activity}) {
    return (
        <Card className="activity">
            <CardContent>
                <div className="activityWrapper">
                    <p>{activity.typeOfActivity}</p>
                    <p>{activity.duration} min</p>
                    <p>{activity.consumedCalories} kcal</p>
                    <p>{activity.date}</p>
                </div>              
            </CardContent>
        </Card>
    )
}

export default ActivityCard;