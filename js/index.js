import IntervalsModel from "./IntervalsModel";
import IntrevalsViewModel from "./IntervalsViewModel";

Array.prototype.remove = function(itemToRemove) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === itemToRemove) {
            this.splice(i, 1);
            break;
        }
    }
}

ko.bindingHandlers.timepicker = {
    update: (element, valueAccessor, allBuildings, viewModel) => {
        const { defaultTime, onChange } = valueAccessor();
        
        $(element).timepicker({
            defaultTime,
            change: (time) => onChange(viewModel, time),

            timeFormat: "HH:mm",
        });
    },
};

ko.bindingHandlers.linkDisabled = {
    update: (element, valueAccessor) => {
        $(element).css(
            valueAccessor()()
                //To disable
                ? {
                    "cursor": "not-allowed",
                    "opacity": "0.5",
                    "color": "#000000",
                    "pointer-events": "none",
                    "text-decoration": "none"
                }
                //To enable
                : { "cursor": "pointer",
                    "opacity": "1",
                    "color": "#0000FF",
                    "pointer-events": "visiblePainted",
                    "text-decoration": "none"
                }
        );
    },
};

const intervalsModel = new IntervalsModel();

const intrevalsViewModel = new IntrevalsViewModel(intervalsModel);

ko.applyBindings(intrevalsViewModel);
