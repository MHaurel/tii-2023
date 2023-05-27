import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ReferenceLine } from "recharts";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const CAL_PER_KG = 7700;

function WeightLineChart({activities}) {

    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
    

    let weightData = [];
    let counter_ = 0
    let initialWeight = user.weightStart;
    activities.forEach((act, i) => {
        counter_ += act.consumedCalories;
        weightData.push({date: act.getDate(), weight: initialWeight - Math.floor(counter_ / CAL_PER_KG)});
    });

    return (
        <LineChart width={500} height={300} data={weightData}>
            <XAxis dataKey="date"/>
            <YAxis domain={[user.weightGoal - 3, 'dataMax + 3']}/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Tooltip/>
            <Legend/>
            <ReferenceLine y={user.weightGoal} label="Goal" stroke="red"/>
            <Line type="monotone" dataKey="weight" stroke="#7196CE" />
            
        </LineChart>
    )
}

export default WeightLineChart;