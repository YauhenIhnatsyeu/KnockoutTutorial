import timeFormat from "../constants/timeFormat";
import linkCssRules from "../constants/linkCssRules";

ko.bindingHandlers.timepicker = {
    update: (element, valueAccessor, allBuildings, viewModel) => {
        const { defaultTime, onChange } = valueAccessor();
        
        $(element).timepicker({
            defaultTime,
            change: (time) => onChange(viewModel, time),

            timeFormat: timeFormat,
        });
    },
};

ko.bindingHandlers.linkDisabled = {
    update: (element, valueAccessor) => {
        $(element).css(
            valueAccessor()()
                ? linkCssRules.disabled
                : linkCssRules.enabled
        );
    },
};
