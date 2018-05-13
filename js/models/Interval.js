export default class Interval {
    constructor(day, start, end) {
        this.day= day;
        this.start = start;
        this.end = end;
    }
    
    static empty() {
        const todaysNight = new Date();
        todaysNight.setHours(0, 0, 0, 0);

        return new Interval(
            "",
            todaysNight,
            todaysNight
        );
    }
}
