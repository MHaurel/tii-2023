import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";


function HomeLineChart({data}) {
    return(

        <LineChart width={1000} height={600} data={data}>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="consumedCalories" stroke="#7196CE" />
        </LineChart>
    )
}

export default HomeLineChart;
