import { PieChart, Pie, Tooltip } from 'recharts';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function ActivitiesPieChart({activities}) {

    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);

    let activitiesDataPieDict = {}
    let activitiesDataPie = []
    activities.forEach((act, i) => {
    // activities.forEach((act, i)) => {
        if (act.typeOfActivity in activitiesDataPieDict) {
            activitiesDataPieDict[act.typeOfActivity] += 1
        } else {
            activitiesDataPieDict[act.typeOfActivity] = 1
        }
    })
    
    for (let activity in activitiesDataPieDict) {
        activitiesDataPie.push({name: activity, value: activitiesDataPieDict[activity]})
    }

    return (
        <PieChart width={500} height={300} data={activitiesDataPie}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={activitiesDataPie}
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