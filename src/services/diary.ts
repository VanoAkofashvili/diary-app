import { nanoid } from "nanoid";
import moment, { Moment } from "moment";
import { Day, Star, SelectedDay } from "types";
import { LOCALSTORAGE_KEY } from "config";
import { getDatesRange } from "./date";


const constructEmptyDay = (date: Moment): Day => ({
  id: nanoid(),
  rate: undefined,
  description: "",
  date: date.toISOString(),
});

// SIDE_EFFECT
export const loadLocalState = () => {
  let localHistory = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!localHistory) return null;

  // Parse locally saved data
  let localState = JSON.parse(localHistory) as unknown as Day[]
  const lastLocalDate = moment(localState[localState.length - 1].date)
  const now = moment()

  // Find the difference between the last saved day and today
  const diff = getDatesRange(lastLocalDate, now)

  // Merge those two together
  return localState.concat(diff.map(constructEmptyDay))
};

// SIDE_EFFECT
export const syncToStorage = (history: Day[]) => localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(history));

export const generateWeekDays = (): Day[] =>
  getDatesRange(
    moment().startOf('week').subtract(1, 'day'),
    moment()
  )
    .map(constructEmptyDay);


const GradientsMap: Record<Star, string> = {
  1: "critical-gradient",
  2: "negative-gradient",
  3: "normal-gradient",
  4: "good-gradient",
  5: "awesome-gradient",
};

export const getGradient = (selected: SelectedDay) =>
  selected?.rate ? GradientsMap[selected.rate] : "";
