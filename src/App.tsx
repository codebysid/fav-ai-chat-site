import "./App.css";
import DemoVideo from "./components/DemoVideo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Reviews from "./components/Reviews";
import ZeroCost from "./components/ZeroCost";

function App() {
  return (
    <div className="dark min-h-screen max-w-screen bg-background text-foreground flex flex-col gap-10 lg:gap-2">
      <Hero />
      <div className=" pt-3">
        <DemoVideo />
      </div>
      <KeyFeatures />
      <ZeroCost />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
