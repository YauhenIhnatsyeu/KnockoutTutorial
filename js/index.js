import IntervalsModel from "./models/IntervalsModel";
import IntrevalsViewModel from "./view_models/IntervalsViewModel";

import "./utils/arrayUtils";
import "./utils/koBindings";

const intervalsModel = new IntervalsModel();

const intrevalsViewModel = new IntrevalsViewModel(intervalsModel);

ko.applyBindings(intrevalsViewModel);
