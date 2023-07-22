// Cards import
import Cards from "../utils/Cards";

// Data import
import data from "../../data/data.json";

const Statistics = () => {
  return (
    <div className="px-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
      {data.socialCards.map((socialCard, index) => (
        <Cards
          key={index}
          socialMediaLogo={socialCard.icon}
          socialMediaName={socialCard.name}
          socialMediaFollowers={socialCard.followers}
          borderTopColorCard={socialCard.borderColor}
          statisticQuantity={socialCard.stastisticQuantity}
          stastiticIcon={socialCard.statisticIcon}
          stastisticColor={socialCard.stastisticColor}
        />
      ))}
    </div>
  );
};

export default Statistics;
