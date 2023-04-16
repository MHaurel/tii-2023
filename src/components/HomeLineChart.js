/*import css*/
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

 

function HomeLineChart({data}) {
    return(

        <LineChart width={1000} height={600} data={data}>
            <XAxis dataKey="x"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="y" stroke="#7196CE" />
        </LineChart>
    )
}

export default HomeLineChart;
