interface IFeatureCard {
  imgSrc: string;
  title: string;
  subTitle: string;
  isLastElement: boolean;
}

const FeatureCard = ({
  imgSrc,
  title,
  subTitle,
  isLastElement,
}: IFeatureCard) => {
  return (
    <div
      className={`${
        isLastElement ? "flex-1 basis-full" : "flex-1 basis-[calc(50%-40px)]"
      } border border-foreground/20 p-10 rounded-lg flex flex-col gap-5 hover:bg-primary/20 transition-all duration-300 hover:scale-105`}
    >
      <div>
        <h2 className=" text-2xl font-medium">{title}</h2>
        <p className=" text-lg text-foreground/50">{subTitle}</p>
      </div>
      <img
        src={imgSrc}
        alt="features"
        className="w-full rounded-lg shadow-[inset_0px_0px_100px_100px_rgba(0,0,0)]"
      />
    </div>
  );
};

export default FeatureCard;
