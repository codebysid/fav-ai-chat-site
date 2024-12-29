import { keyFeatures } from "../utils/constants";
import FeatureCard from "./FeatureCard";

const KeyFeatures = () => {
  return (
    <div className=" pt-20">
      <h1 className=" text-center text-4xl font-bold pb-14">
        Make ChatGPT{" "}
        <span className=" text-primary/70 underline underline-offset-4">
          10x Powerful
        </span>
      </h1>
      <div className=" flex flex-row flex-wrap items-center px-44">
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