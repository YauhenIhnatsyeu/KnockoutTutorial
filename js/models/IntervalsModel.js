import Interval from "./Interval";
import intervals from "../constants/intervals";
import Event from "../utils/Event";

export default class IntervalsModel {
    constructor() {
        this.intervals = intervals;

        this.onIntervalsChanged = new Event();
    }
    
    //Subscribe on intervals array changed
    subscribe = (callback) => {
        this.onIntervalsChanged.subscribe(() => callback(this.intervals));
    }

    getIntervals = () => {
        return this.intervals;
    }

    add = () => {
        this.intervals.push(Interval.empty());

        this.onIntervalsChanged.invoke();
    };

    remove = (interval) => {
        this.intervals.remove(interval);

        this.onIntervalsChanged.invoke();
    };

    replace = (interval, key, value) => {
        const intervalIndex = this.intervals.indexOf(interval);

        if (intervalIndex !== -1) {
            this.intervals[intervalIndex][key] = value;
        }

        this.onIntervalsChanged.invoke();
    }
	
	save = () => {
        const intervalsJSON = JSON.stringify(this.intervals);

		localStorage.setItem("intervals", intervalsJSON);
    };
	
	load = () => {
        const intervalsJSON = localStorage.getItem("intervals");

        if (!intervalsJSON) return;
        
        const newIntervals = JSON.parse(intervalsJSON);
        this.intervals = newIntervals;

        this.onIntervalsChanged.invoke();
    };
}
