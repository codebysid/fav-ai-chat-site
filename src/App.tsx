import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Reviews from "./components/Reviews";
import ZeroCost from "./components/ZeroCost";
import Video from "./components/ui/Video";

function App() {
  const demoVideoRef = useRef<HTMLVideoElement | null>(null)
  return (
    <div className="dark min-h-screen max-w-screen bg-background text-foreground flex flex-col gap-10 lg:gap-2">
      <Hero />
      <div className="pt-3 videoContainer flex justify-center items-center">
        <Video src="/demo.mp4" videoRef={demoVideoRef} />
      </div>
      <KeyFeatures />
      <ZeroCost />
      <Reviews />
      <Footer videoRef={demoVideoRef} />
    </div>
  );
}

export default App;
