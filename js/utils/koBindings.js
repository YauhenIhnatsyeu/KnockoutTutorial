import timeFormat from "../constants/timeFormat";

ko.bindingHandlers.timepicker = {
    update: (element, valueAccessor, allBuildings, viewModel) => {
        const { defaultTime, onChange } = valueAccessor();
        
        $(element).timepicker({
            defaultTime,
            change: (time) => onChange(viewModel, time),

            timeFormat,
        });
    },
};
