import CustomDate from "./CustomDate"

class Activity {
    constructor(id, people_id, typeOfActivity, duration, numberOfSteps, consumedCalories, date) {
        this.id = id
        this.people_id = people_id
        this.typeOfActivity = typeOfActivity;
        this.duration = duration
        this.numberOfSteps = numberOfSteps
        this.consumedCalories = consumedCalories
        this.date = new CustomDate(date);
    }

    getTypeOfActivity() {
        return this.typeOfActivity[0].toUpperCase() + this.typeOfActivity.slice(1)
    }

    getDate() {
        return this.date.getDate();
    }
}

export default Activity;