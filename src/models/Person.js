class Person {
    constructor(
        id, gender, firstname, lastname, birthyear, height, weightStart, weightGoal, bmiStart, bmiGoal, activityProfile
    ) {
        this.id = id;
        this.gender = gender;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthyear = birthyear;
        this.height = height;
        this.weightStart = weightStart;
        this.weightGoal = weightGoal;
        this.bmiStart = bmiStart;
        this.bmiGoal = bmiGoal;
        this.activityProfile = activityProfile;

        this.activities = null;
    }
}

export default Person;