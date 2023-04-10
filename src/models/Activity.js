class Activity {
    constructor(id, people_id, typeOfActivity, duration, numberOfSteps, consumedCalories, date) {
        this.id = id
        this.people_id = people_id
        this.typeOfActivity = typeOfActivity[0].toUpperCase() + typeOfActivity.slice(1)
        this.duration = duration
        this.numberOfSteps = numberOfSteps
        this.consumedCalories = consumedCalories
        this.date = date
    }
}

export default Activity;