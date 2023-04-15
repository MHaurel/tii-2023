import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

function ActivitiesLineChart({data}) {
    return (

    <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="x"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
    </LineChart>
    )
}

export default ActivitiesLineChart;