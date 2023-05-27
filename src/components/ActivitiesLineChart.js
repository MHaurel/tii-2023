import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend,  } from "recharts";

function ActivitiesLineChart({activities, width, height}) {

    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

    let activitiesData = [];
    activities.forEach((act, i) => {
        activitiesData.push({date: act.getDate(), consumedCalories: act.consumedCalories})
    });

    // useEffect(() => {
    //     console.log("refreshing graph")
    //     if (activities !== null) {
    //         let activitiesData = []
    //         activities.forEach((act, i) => {
    //             activitiesData.push({date: act.getDate(), consumedCalories: act.consumedCalories})
    //         });
    //     }
    // }, [])

    return (
        <LineChart width={width} height={height} data={activitiesData}>
            <XAxis dataKey="date"/>
            <YAxis domain={['dataMin - 50', 'dataMax + 50']}/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="consumedCalories" stroke="#7196CE" />
        </LineChart>
    )
}

export default ActivitiesLineChart;