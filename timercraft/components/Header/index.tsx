import CloseIcon from "@/asset/CloseIcon";
import CounterCard from "../CounterCard";
import { IProp } from "./_type";
import { ITimerForm } from "@/model/interface/ITimerForm";
import { useCounterDown } from "@/hooks/useCounterDown";
import clsx from "clsx";
import Link from "next/link";

export default function Header({ form }: IProp) {
  const time = useCounterDown(form.remainingTimePeriod, form.setTime);
  return (
    <div
      className={clsx(
        "min-h-[72px] flex items-center justify-evenly flex-col bg-header left-0 right-0 xl:flex-row",
        form.positioning.includes("bottom") ? "bottom-0" : "top-0",
        form.positioning.includes("Sticky") ? "sticky" : "absolute"
      )}
    >
      <h1 className="text-2xl font-bold text-text">{form.timerTitle}</h1>
      <div className="flex flex-row flex-nowrap mt-2 xl:mt-0">
        {Object.keys(form.displayCount)
          .filter(
            (item) => form.displayCount[item as keyof typeof form.displayCount]
          )
          .map((item) => (
            <CounterCard
              key={item}
              cardTitle={form[(item + "Label") as keyof ITimerForm] as string}
              count={
                time !== undefined
                  ? time[item as keyof typeof form.displayCount]
                  : 0
              }
              className="mx-2"
            />
          ))}
      </div>
      <Link
        href={form.buttonLink}
        passHref={true}
        className="text-2xl px-4 m-2 font-bold rounded-lg bg-card text-text"
      >
        {form.buttonText}
      </Link>
      {!form.closeButton && (
        <CloseIcon className="absolute right-2 top-2 stroke-text xl:top-auto sm:right-5" />
      )}
    </div>
  );
}
