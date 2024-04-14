"use client";

import MenuIcon from "@/asset/MenuIcon";
import CheckButton from "@/components/CheckButton";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import PlaceHolder from "@/components/PlaceHolder";
import RadioButton from "@/components/RadioButton";
import Title from "@/components/Title";
import Toggle from "@/components/Toggle";
import { positionList, themeList, timeList } from "@/constant/input";
import { TimerForm } from "@/model/class/TimerForm";
import { ITimerForm } from "@/model/interface/ITimerForm";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState<ITimerForm>(new TimerForm());
  const [open, setOpen] = useState(true);

  const handleChangeDropdown = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (event.currentTarget.textContent !== null) {
      setForm({ ...form, timerStyle: event.currentTarget.id });
      document
        .querySelector("html")
        ?.setAttribute("data-theme", event.currentTarget.id);
    }
  };

  return (
    <div className="flex flex-row h-screen relative">
      <button
        className={clsx(
          "bg-sidebar w-10 h-10 absolute z-30 rounded-r-md outline-none flex items-center justify-center",
          open
            ? "md:left-[calc(33.33%-2.5rem)] left-[calc(83.33%-2.5rem)]"
            : "left-0 shadow-lg"
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuIcon className="w-5 fill-title" />
      </button>
      <div
        id="sidebar"
        className={clsx(
          "bg-sidebar h-full overflow-x-hidden absolute z-10 shadow-2xl transition-all",
          "md:shadow-none md:relative",
          open ? "md:w-2/6 w-5/6 p-6" : "w-0 p-0"
        )}
      >
        <Title className="text-2xl font-roboto" title="Timer Settings" />
        <Title title="Timer Style" />
        <Dropdown
          menuItems={themeList}
          selected={form.timerStyle}
          onChange={handleChangeDropdown}
        />

        <Title title="Close Button" />
        <Toggle
          label="Turn on close button"
          checked={form.closeButton}
          onClick={() => setForm({ ...form, closeButton: !form.closeButton })}
        />

        <Title title="Timer Title" />
        <PlaceHolder
          placeholder={form.timerTitle}
          onChange={(event) =>
            setForm({ ...form, timerTitle: event.target.value })
          }
        />

        <Title title="Set the time in" />
        <div className="flex flex-row flex-wrap">
          {timeList.map((item) => (
            <RadioButton
              key={item.value}
              className="mr-4 mb-2"
              label={item.name}
              name="time"
              value={item.value}
              checked={item.value === form.setTime}
              onClick={() => setForm({ ...form, setTime: item.value })}
            />
          ))}
        </div>

        <Title title="Remaining Time Period" />
        <PlaceHolder
          placeholder={form.remainingTimePeriod.toString()}
          className="w-16"
          onChange={(event) =>
            setForm({
              ...form,
              remainingTimePeriod: parseInt(event.target.value),
            })
          }
        />

        <Title title="Positioning" />
        <div className="flex flex-row flex-wrap">
          {positionList.map((item) => (
            <RadioButton
              key={item.value}
              className="mr-4 mb-2"
              label={item.name}
              name="position"
              value={item.value}
              checked={item.value === form.positioning}
              onClick={() => setForm({ ...form, positioning: item.value })}
            />
          ))}
        </div>

        <Title className="text-2xl font-roboto" title="Counters and Labels" />
        <Title title="Display the count in" />
        <div className="flex flex-row flex-wrap">
          {timeList.map((item) => (
            <CheckButton
              key={item.value}
              className="mr-4 mb-2"
              label={item.name}
              name="display"
              checked={
                form.displayCount[item.value as keyof typeof form.displayCount]
              }
              onClick={(event) => {
                setForm({
                  ...form,
                  displayCount: {
                    ...form.displayCount,
                    [item.value]: event.currentTarget.checked,
                  },
                });
              }}
            />
          ))}
        </div>

        <Title title="Days Label" />
        <PlaceHolder
          placeholder={form.daysLabel}
          onChange={(event) =>
            setForm({
              ...form,
              daysLabel: event.target.value,
            })
          }
        />

        <Title title="Hours Label" />
        <PlaceHolder
          placeholder={form.hoursLabel}
          onChange={(event) =>
            setForm({
              ...form,
              hoursLabel: event.target.value,
            })
          }
        />
        <Title title="Minutes Label" />
        <PlaceHolder
          placeholder={form.minutesLabel}
          onChange={(event) =>
            setForm({
              ...form,
              minutesLabel: event.target.value,
            })
          }
        />
        <Title title="Seconds Label" />
        <PlaceHolder
          placeholder={form.secondsLabel}
          onChange={(event) =>
            setForm({
              ...form,
              secondsLabel: event.target.value,
            })
          }
        />
        <Title className="text-2xl font-roboto" title="Button Settings" />
        <Title title="Button Text" />
        <PlaceHolder
          placeholder={form.buttonText}
          onChange={(event) =>
            setForm({
              ...form,
              buttonText: event.target.value,
            })
          }
        />
        <Title title="Button Link" />
        <PlaceHolder
          placeholder={form.buttonLink}
          onChange={(event) => {
            setForm({
              ...form,
              buttonLink: event.target.value,
            });
            console.log(form);
          }}
        />
      </div>
      <div className={clsx("h-full bg-background w-full", open && "md:w-4/6")}>
        <div
          id="screen"
          className="bg-screen my-8 mx-5 h-[calc(100%-4rem)] relative"
          data-theme={form.timerStyle}
        >
          <Header form={form} />
        </div>
      </div>
    </div>
  );
}
