import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";

function ActivitiesLineChart({data}) {
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="consumedCalories" stroke="#7196CE" />
        </LineChart>
    )
}

export default ActivitiesLineChart;