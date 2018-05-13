import Interval from "../models/Interval";
import days from "./days";
import dates from "./dates";

export default [
    new Interval(days[2], dates[0], dates[1]),
    new Interval(days[6], dates[1], dates[2]),
    new Interval(days[4], dates[2], dates[3]),
];
