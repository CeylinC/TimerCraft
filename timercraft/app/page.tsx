"use client";

import CheckButton from "@/components/CheckButton";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import PlaceHolder from "@/components/PlaceHolder";
import RadioButton from "@/components/RadioButton";
import Title from "@/components/Title";
import Toggle from "@/components/Toggle";
import { TimerForm } from "@/model/timerForm";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";

const timerList = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Colorful", value: "colorful" },
];
const timeList = [
  { name: "Days", value: "days" },
  { name: "Hours", value: "hours" },
  { name: "Minutes", value: "minutes" },
  { name: "Seconds", value: "seconds" },
];
const positionList = [
  { name: "Top Sticky", value: "topSticky" },
  { name: "Top Static", value: "topStatic" },
  { name: "Bottom Static", value: "bottomStatic" },
];

export default function Home() {
  const [form, setForm] = useState<TimerForm>({
    timerStyle: "light",
    closeButton: false,
    timerTitle: "Black Friday Sale",
    setTime: "hours",
    remainingTimePeriod: 120,
    positioning: "topSticky",
    displayCount: { days: true, hours: true, minutes: true, seconds: true },
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    buttonLink: "",
    buttonText: "Shop Now!",
  });
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
          "bg-white w-10 h-10 absolute z-30 rounded-r-md outline-none",
          open ? "md:left-[calc(33.33%-2.5rem)] left-[calc(83.33%-2.5rem)]" : "left-0 shadow-lg"
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        X
      </button>
      <div
        className={clsx(
          "bg-white h-full overflow-x-hidden md:relative absolute z-10 shadow-2xl md:shadow-none transition-all",
          open ? "md:w-2/6 w-5/6 p-6" : "w-0 p-0"
        )}
      >
        <Title className="text-2xl" title="Timer Settings">
          <Title title="Timer Style">
            <Dropdown
              menuItems={timerList}
              selected={form.timerStyle}
              onChange={handleChangeDropdown}
            />
          </Title>
          <Title title="Close Button">
            <Toggle
              label="Turn on close button"
              checked={form.closeButton}
              onClick={() =>
                setForm({ ...form, closeButton: !form.closeButton })
              }
            />
          </Title>
          <Title title="Timer Title">
            <PlaceHolder
              placeholder={form.timerTitle}
              onChange={(event) =>
                setForm({ ...form, timerTitle: event.target.value })
              }
            />
          </Title>
          <Title title="Set the time in">
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
          </Title>
          <Title title="Remaining Time Period">
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
          </Title>
          <Title title="Positioning">
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
          </Title>
        </Title>
        <Title className="text-2xl" title="Counters and Labels">
          <Title title="Display the count in">
            <div className="flex flex-row flex-wrap">
              {timeList.map((item) => (
                <CheckButton
                  key={item.value}
                  className="mr-4 mb-2"
                  label={item.name}
                  name="display"
                  checked={
                    form.displayCount[
                      item.value as keyof typeof form.displayCount
                    ]
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
          </Title>
          <Title title="Days Label">
            <PlaceHolder
              placeholder="Days"
              onChange={(event) =>
                setForm({
                  ...form,
                  daysLabel: event.target.value,
                })
              }
            />
          </Title>
          <Title title="Hours Label">
            <PlaceHolder
              placeholder="Hours"
              onChange={(event) =>
                setForm({
                  ...form,
                  hoursLabel: event.target.value,
                })
              }
            />
          </Title>
          <Title title="Minutes Label">
            <PlaceHolder
              placeholder="Minutes"
              onChange={(event) =>
                setForm({
                  ...form,
                  minutesLabel: event.target.value,
                })
              }
            />
          </Title>
          <Title title="Seconds Label">
            <PlaceHolder
              placeholder="Seconds"
              onChange={(event) =>
                setForm({
                  ...form,
                  secondsLabel: event.target.value,
                })
              }
            />
          </Title>
        </Title>
        <Title className="text-2xl" title="Button Settings">
          <Title title="Button Text">
            <PlaceHolder
              placeholder={form.buttonText}
              onChange={(event) =>
                setForm({
                  ...form,
                  buttonText: event.target.value,
                })
              }
            />
          </Title>
          <Title title="Button Link">
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
          </Title>
        </Title>
      </div>
      <div className={clsx("h-full bg-gray-300 w-full", open ? "md:w-4/6" : "")}>
        <div
          id="screen"
          className="bg-screen my-8 mx-5 h-[calc(100%-4rem)] relative"
        >
          <Header form={form} />
        </div>
      </div>
    </div>
  );
}
