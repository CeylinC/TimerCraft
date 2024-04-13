export class TimerForm {
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

  constructor(data?: any) {
    this.timerStyle = data?.timerStyle || "light";
    this.closeButton = data?.closeButton || false;
    this.timerTitle = data?.timerTitle || "Black Friday Sale";
    this.setTime = data?.setTime || "hours";
    this.remainingTimePeriod = data?.remainingTimePeriod || 120;
    this.positioning = data?.positioning || "topSticky";
    this.displayCount = data?.displayCount || {
      days: true,
      hours: true,
      minutes: true,
      seconds: true,
    };
    this.daysLabel = data?.daysLabel || "Days";
    this.hoursLabel = data?.hoursLabel || "Hours";
    this.minutesLabel = data?.minutesLabel || "Minutes";
    this.secondsLabel = data?.secondsLabel || "Seconds";
    this.buttonText = data?.buttonText || "Shop Now!";
    this.buttonLink = data?.buttonLink || "https://beforesunset.ai/";
  }
}
