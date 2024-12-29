import { twitterReviewsId } from "../utils/constants";
import InfiniteScroll from "./InfiniteScroll";

const Reviews = () => {
  return (
    <div className=" w-full pt-20 pop-animation">
      <h1 className=" text-center text-2xl lg:text-4xl font-bold pb-14">
        Boost Your{" "}
        <span className=" text-primary/70 underline underline-offset-4">
          Productivity
        </span>
      </h1>
      <div className="lg:px-44">
        <InfiniteScroll scrollData={twitterReviewsId} scrollDirection="left" />
        <InfiniteScroll scrollData={twitterReviewsId} scrollDirection="right" />
      </div>
    </div>
  );
};

export default Reviews;
