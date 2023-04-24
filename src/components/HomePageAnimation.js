import './HomePageAnimation.css';
import HealthBar from './HealthBar';

function HomePageAnimation() {

    let fillPercentage = 100; // Will be dynamically obtained

    let supportText = "You're doing well ! Keep up to reach your objective !"
    if (fillPercentage < 75 && fillPercentage >= 50) {
        supportText = "Slowly but carefully, this is your motto ! Don't lost the sight of your goal."
    } else if (fillPercentage < 50 && fillPercentage >= 25) {
        supportText = "Be careful, you are getting far of your objective !"
    } else if (fillPercentage < 25) {
        supportText = "Your objective is really far, take the time to enjoy activities and make steps towards your goal !"
    }

    return(
        <div className="divAnimation">
            {/* Illustration on the LEFT and health bar + recommendation text on the RIGHT */}
            <img src={process.env.PUBLIC_URL + "/images/weightIllustration1.png"} className='illustration'/>
            <div className='healthBar'>
                <HealthBar fillPercentage={fillPercentage}/>
                <p>{supportText}</p>
            </div>
        </div>
    )
}

export default HomePageAnimation;