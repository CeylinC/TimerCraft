import { useEffect, useState } from "react";

export const useCounterDown = (
  remainingTimePeriod: number,
  timeType: string
) => {
  const [seconds, setSeconds] = useState(
    calculateSeconds(remainingTimePeriod, timeType)
  );

  useEffect(() => {
    setSeconds(calculateSeconds(remainingTimePeriod, timeType));
  }, [remainingTimePeriod, timeType]);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return getReturnValues(seconds);
};

const getReturnValues = (_seconds: number) => {
  const days = Math.floor(_seconds / (24 * 60 * 60));
  const hours = Math.floor((_seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((_seconds % (60 * 60)) / 60);
  const seconds = _seconds % 60;

  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};

const calculateSeconds = (timePeriod: number, timeType: string) => {
  return timeType === "days"
    ? timePeriod * 24 * 60 * 60
    : timeType === "hours"
    ? timePeriod * 60 * 60
    : timeType === "minutes"
    ? timePeriod * 60
    : timePeriod;
};
