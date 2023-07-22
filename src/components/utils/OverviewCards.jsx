import React from "react";
import Image from "./Image";

const OverviewCards = ({
  title,
  icon,
  number,
  statistic,
  statisticIcon,
  statisticColor,
}) => {
  return (
    <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue py-10 px-6 rounded flex flex-col gap-7 hover:opacity-60 hover:scale-105 duration-150 cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="font-[700] text-dark-grayish-blue dark:text-desaturated-blue">
          {title}
        </p>
        <Image src={icon} />
      </div>
      <div className="flex justify-between">
        <p className="text-5xl font-[700] dark:text-white">{number}</p>
        <div className="flex justify-between gap-3 items-center">
          <Image src={statisticIcon} className={"w-2 h-2"} />
          <p className={statisticColor}>{statistic}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
