import "./App.css";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Video from "./components/ui/Video";
import { twitterReviewsId } from "./utils/constants";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <div className="dark pt-32 min-h-screen max-w-screen bg-background text-foreground flex flex-col justify-center items-center gap-5 after:absolute after:h-[70%] after:w-[85%] after:rounded-full after:bg-primary after:-top-[500px] after:shadow-[0px_150px_1000px_50px_rgba(127,0,255,0.2)] grid-background">
      <Logo />
      <Hero />
      <div className="videoContainer flex justify-center items-center">
        <Video src="/demo.mp4" />
      </div>
      <div className=" w-full">
        <h1 className=" text-center text-4xl font-bold pb-14">Reviews</h1>
        <div className="px-44">
          <InfiniteScroll
            scrollData={twitterReviewsId}
            scrollDirection="left"
          />
          <InfiniteScroll
            scrollData={twitterReviewsId}
            scrollDirection="right"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
