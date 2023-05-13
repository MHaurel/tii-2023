import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ReferenceLine } from "recharts";

function WeightLineChart({data, goal}) {
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="date"/>
            <YAxis domain={[goal - 3, 'dataMax']}/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Tooltip/>
            <Legend/>
            <ReferenceLine y={goal} label="Goal" stroke="red"/>
            <Line type="monotone" dataKey="weight" stroke="#7196CE" />
            
        </LineChart>
    )
}

export default WeightLineChart;