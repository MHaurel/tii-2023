import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend,  } from "recharts";

function ActivitiesLineChart({data, width, height}) {
    return (
        <LineChart width={width} height={height} data={data}>
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