import React from "react";

// Utils import
import Image from "../Image";

// Style import
import styles from "./Cards.module.css";

const Cards = ({
  socialMediaLogo,
  socialMediaName,
  socialMediaFollowers,
  borderTopColorCard,
  stastiticIcon,
  statisticQuantity,
  stastisticColor,
}) => {
  return (
    <div
      className={`${styles[borderTopColorCard]} bg-light-grayish-blue border-t-4 flex flex-col gap-6 p-5 rounded dark:bg-dark-desaturated-blue hover:scale-105 duration-150 cursor-pointer`}
    >
      <div className="flex items-center justify-center gap-3">
        <Image src={socialMediaLogo} />
        <p className="text-sm dark:text-desaturated-blue">{socialMediaName}</p>
      </div>
      <div className="text-center">
        <p className="font-[700] text-7xl text-dark-desaturated-blue dark:text-white">
          {socialMediaFollowers}
        </p>
        <h2 className="text-lg text-dark-grayish-blue dark:text-desaturated-blue tracking-widest uppercase">
          Followers
        </h2>
      </div>
      <div className="flex items-center justify-center gap-3 dark:text-white">
        <Image src={stastiticIcon} />
        <p className={styles[stastisticColor]}>{statisticQuantity}</p>
      </div>
    </div>
  );
};

export default Cards;
