import Counter from "../Counter";
import { IProp } from "./_type";

export default function CounterCard({
  count,
  cardTitle,
  className,
}: IProp) {
  const numberArr = count.toString().split("");
  if (numberArr.length < 2) {
    numberArr.unshift("0");
  }
  return (
    <div className={className}>
      <div className="flex flex-row flex-nowrap">
        {numberArr.map((item, i) => {
          return <Counter number={item} key={i}/>;
        })}
      </div>
      <p className="text-[10px] text-center text-text">{cardTitle}</p>
    </div>
  );
}
