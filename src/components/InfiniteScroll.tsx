import { Tweet } from "react-tweet";

interface IExamples {
  scrollData: string[];
  scrollDirection: "left" | "right";
}

const InfiniteScroll = ({ scrollData, scrollDirection }: IExamples) => {
  const styles = {
    left: `scroll-content-left`,
    right: `scroll-content-right`,
  };
  return (
    <div className="flex h-60 text-sm overflow-hidden">
      <div className={`flex gap-10 ${styles[scrollDirection]} `}>
        {scrollData &&
          scrollData.map((tweetId) => <Tweet key={tweetId} id={tweetId} />)}
        {scrollData &&
          scrollData.map((tweetId) => <Tweet key={tweetId} id={tweetId} />)}
      </div>
    </div>
  );
};

export default InfiniteScroll;
