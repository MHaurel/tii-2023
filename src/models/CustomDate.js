class CustomDate {
    constructor(date) {
        this.date = new Date(date);

        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
    }

    getDate() {
        return `${this.month}/${this.day}/${this.year}`
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    getDay() {
        return this.day;
    }
}

export default CustomDate;