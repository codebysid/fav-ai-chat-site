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
    <div className="flex h-60 text-sm overflow-hidden relative after:absolute after:h-full after:w-0 after:left-0 after:shadow-[0px_0px_30px_30px_rgba(0,0,0)] before:absolute before:h-full before:z-30 before:w-0 before:right-0 before:shadow-[0px_0px_30px_30px_rgba(0,0,0)]">
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
