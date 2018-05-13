import Interval from "./Interval";
import days from "../constants/days";

export default class IntrevalsViewModel {
    constructor(intervalsModelParam) {
        this.intervalsModel = intervalsModelParam;

        this.intervals = ko.observableArray(this.intervalsModel.getIntervals());
    
        this.days = ko.observableArray(days);
    
        this.controlsDisabled = ko.observable(false);
    
        this.disableButtonValue = ko.computed(() =>
            this.controlsDisabled()
                ? "Disabled"
                : "Enabled"
        );
    
        this.intervalsModel.subscribe((newIntervals) => {
            this.intervals(newIntervals);
        });
    }

    daysSelectChanged = (interval, e) => {
        this.intervalsModel.replace(interval, Object.keys(interval)[0], e.target.value);
    };

    startPickerChanged = (interval, newStart) => {
        this.intervalsModel.replace(interval, Object.keys(interval)[1], newStart);
    }

    endPickerChanged = (interval, newEnd) => {
        this.intervalsModel.replace(interval, Object.keys(interval)[2], newEnd);
    }

    add = () => {
        const newInterval = Interval.empty();
        this.intervalsModel.add(newInterval);
    };
    
    remove = (interval) => {
        this.intervalsModel.remove(interval);
    };
	
	save = () => {
        this.intervalsModel.save();
    };
	
	load = () => {
        this.intervalsModel.load();
    };

    disable = () => {
        this.controlsDisabled(!this.controlsDisabled());
    }
};
