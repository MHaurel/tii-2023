import "./Activities.css";

import Activity from "../models/Activity";

import ActivityCard from "../components/ActivityCard";

function Activities() {

    let activity = new Activity(
        1,
        1,
        "footing",
        55,
        0,
        469,
        "2022-01-02T17:45:21.000Z"
    );
    let activities = [
        activity, activity
    ];

    return (
        <div>
            <h1>Vos dernières activités physiques</h1>
            <h3 className="subtitle">Retrouvez les dernières activités que vous avez effectué 🏃🏼‍♀️</h3>
            <br/>
            <h4 style={{color: "red"}}>Segmented buttons here</h4>
            <p></p>
            {
                activities.map((act, i) => {
                    return <ActivityCard activity={act}/>
                })
            }
        </div>
    )
}

export default Activities;