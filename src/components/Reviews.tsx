import { twitterReviewsId } from "../utils/constants";
import InfiniteScroll from "./InfiniteScroll";

const Reviews = () => {
  return (
    <div className=" w-full pt-20">
      <h1 className=" text-center text-4xl font-bold pb-14">Reviews</h1>
      <div className="px-44">
        <InfiniteScroll scrollData={twitterReviewsId} scrollDirection="left" />
        <InfiniteScroll scrollData={twitterReviewsId} scrollDirection="right" />
      </div>
    </div>
  );
};

export default Reviews;
