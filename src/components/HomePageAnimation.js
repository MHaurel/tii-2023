import './HomePageAnimation.css';
import HealthBar from './HealthBar';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const CAL_PER_KG = 7700;

function HomePageAnimation() {
    const {authToken, setAuthToken, login, clearTokens, sidebarDisabled, setSidebarDisabled, user, setUser} = useContext(AuthContext);
 
    let fillPercentage = 0;

    if (user !== null) {
        let caloriesCounter = 0;
        let initialWeight = user.weightStart;
        let weightGoal = user.weightGoal
        let currentWeight = 0;
        user.activities.forEach((act, i) => {
            caloriesCounter += act.consumedCalories;
        });
        currentWeight = initialWeight - Math.floor(caloriesCounter / CAL_PER_KG);
        fillPercentage = Math.round((initialWeight - currentWeight) / (initialWeight - weightGoal) * 100)
        if (fillPercentage > 100) {
            fillPercentage = 100;
        }
    }    
    
    let supportText = "You're doing well ! Keep up to reach your objective !"
    if (fillPercentage < 75 && fillPercentage >= 50) {
        supportText = "Slowly but carefully, this is your motto ! Don't lost the sight of your goal."
    } else if (fillPercentage < 50 && fillPercentage >= 25) {
        supportText = "Be careful, you are getting far of your objective !"
    } else if (fillPercentage < 25) {
        supportText = "Your objective is really far, take the time to enjoy activities and make steps towards your goal !"
    }

    const gender = user === null ? "0" : user.gender;

    return(
        <div className="divAnimation">
            <img src={process.env.PUBLIC_URL + "/images/weightIllustration" + gender + ".png"} className='illustration'/>
            <div className='healthBar'>
                <HealthBar fillPercentage={fillPercentage}/>
                <p>{supportText}</p>
            </div>
        </div>
    )
}

export default HomePageAnimation;