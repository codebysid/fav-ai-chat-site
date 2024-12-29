import { keyFeatures } from "../utils/constants";
import FeatureCard from "./FeatureCard";

const KeyFeatures = () => {
  return (
    <div className=" pt-20">
      <h1 className=" text-center text-4xl font-bold pb-14">KeyFeatures</h1>
      <div className=" flex flex-row flex-wrap items-center px-40">
        {keyFeatures.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              subTitle={feature.subTitle}
              imgSrc={feature.img}
              isLastElement={feature.id === keyFeatures.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KeyFeatures;
