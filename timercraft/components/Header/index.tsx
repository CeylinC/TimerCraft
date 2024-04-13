import CloseIcon from "@/asset/CloseIcon";
import CounterCard from "../CounterCard";
import { IProp } from "./_type";
import { TimerForm } from "@/model/timerForm";
import { useCounterDown } from "@/hooks/useCounterDown";
import clsx from "clsx";

export default function Header({ form }: IProp) {
  const timeList = ["days", "hours", "minutes", "seconds"];
  const time = useCounterDown(form.remainingTimePeriod, form.setTime);
  return (
    <div
      id="header"
      className={clsx(
        "min-h-[72px] flex items-center justify-evenly flex-col xl:flex-row bg-header left-0 right-0",
        form.positioning.includes("bottom") ? "bottom-0" : "top-0",
        form.positioning.includes("Sticky") ? "sticky" : "absolute"
      )}
    >
      <h1 className="text-2xl font-bold text-text">{form.timerTitle}</h1>
      <div className="flex flex-row flex-nowrap mt-2 xl:mt-0">
        {timeList
          .filter(
            (item) => form.displayCount[item as keyof typeof form.displayCount]
          )
          .map((item) => (
            <CounterCard
              key={item}
              cardTitle={form[(item + "Label") as keyof TimerForm] as string}
              count={
                time !== undefined
                  ? time[item as keyof typeof form.displayCount]
                  : 0
              }
              className="mx-2"
            />
          ))}
      </div>
      <a
        href={form.buttonLink}
        className="text-2xl px-4 m-2 font-bold rounded-lg bg-card text-text"
      >
        {form.buttonText}
      </a>
      {!form.closeButton && (
        <CloseIcon className="absolute right-2 top-2 stroke-text xl:top-auto sm:right-5" />
      )}
    </div>
  );
}
