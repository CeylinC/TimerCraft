export interface ITimerForm {
  timerStyle: string;
  closeButton: boolean;
  timerTitle: string;
  setTime: string;
  remainingTimePeriod: number;
  positioning: string;
  displayCount: {
    days: boolean;
    hours: boolean;
    minutes: boolean;
    seconds: boolean;
  };
  daysLabel: string;
  hoursLabel: string;
  minutesLabel: string;
  secondsLabel: string;
  buttonText: string;
  buttonLink: string;
}
