// import trick from https://github.com/moment/luxon/issues/854
import { DateTime } from "luxon/src/luxon";

console.log("Yesterday was", DateTime.now().minus({ day: 1 }).toJSDate());
