import { keyFeatures } from "../utils/constants";
import FeatureCard from "./FeatureCard";

const KeyFeatures = () => {
  return (
    <div className=" pt-20 pop-animation">
      <h1 className=" text-center text-2xl lg:text-4xl font-bold pb-14">
        Make ChatGPT{" "}
        <span className=" text-primary/70 underline underline-offset-4">
          10x Powerful
        </span>
      </h1>
      <div className=" flex flex-col gap-2 lg:gap-0 lg:flex-row flex-wrap items-center px-10 lg:px-44">
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
