import React from "react";

// Overview card import
import OverviewCards from "../utils/OverviewCards";

// Data import
import data from "../../data/data.json";

const Overview = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <h2 className="font-[700] text-4xl text-dark-grayish-blue dark:text-white px-14 py-10">
        Overview - Today
      </h2>
      <div className="px-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.overviewCards.map((overviewCard, index) => (
          <OverviewCards
            key={index}
            title={overviewCard.title}
            icon={overviewCard.icon}
            number={overviewCard.number}
            statisticIcon={overviewCard.statisticIcon}
            statistic={overviewCard.stastistic}
            statisticColor={overviewCard.stastisticColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
