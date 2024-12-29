import "./App.css";
import DemoVideo from "./components/DemoVideo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Logo from "./components/Logo";
import Reviews from "./components/Reviews";
import ZeroCost from "./components/ZeroCost";

function App() {
  return (
    <div className="dark pt-32 min-h-screen max-w-screen bg-background text-foreground flex flex-col justify-center items-center gap-10 after:absolute after:h-[70%] after:w-[85%] after:rounded-full after:bg-primary after:-top-full after:shadow-[0px_350px_1000px_50px_rgba(127,0,255,0.2)] grid-background">
      <Logo />
      <Hero />
      <DemoVideo />
      <KeyFeatures />
      <ZeroCost />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
