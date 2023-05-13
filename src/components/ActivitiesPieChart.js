import { PieChart, Pie, Tooltip } from 'recharts';

function ActivitiesPieChart({data}) {

    return (
        <PieChart width={500} height={300} data={data}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill='#7196CE'
                label
            />
            <Tooltip/>
        </PieChart>
    );
}

export default ActivitiesPieChart;