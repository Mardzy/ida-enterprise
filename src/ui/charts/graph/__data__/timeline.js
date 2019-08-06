import _ from "lodash";
import { fromJS } from "immutable";
import { timelineAccessor } from "../line";

/**
 * @type {*[]}
 */
const values = [
  [1, 47, 160, 180, 32, 151],
  [120, 44, 180, 92, 155, 53],
  [90, 77, 152, 4, 166, 92],
  [49, 163, 186, 161, 142, 56],
  [181, 1, 167, 104, 147, 127]
];

/**
 * Create a dummy timeline
 * @return {*[]}
 */
const createTimeline = (set) => _.range(1, 5).map((month, idx) => ({
  [timelineAccessor.x]: `${month}/1/2018`,
  [timelineAccessor.y]: values[set - 1][month]
}));

/**
 * Dummy timeline data
 * @type {*[]}
 */
export default fromJS([
  { label: "Rutten", timeline: createTimeline(1) },
  { label: "Romme", timeline: createTimeline(2) },
  { label: "McCarty", timeline: createTimeline(3) },
  { label: "Eikelenboom", timeline: createTimeline(4) },
  { label: "Hart", timeline: createTimeline(5) }
]);