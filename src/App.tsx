import "./App.css";
import Hero from "./components/Hero";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="dark min-h-screen max-w-screen bg-background text-foreground flex flex-col justify-center items-center gap-16 after:absolute after:h-[70%] after:w-[85%] after:rounded-full after:bg-primary after:-top-[500px] after:shadow-[0px_150px_1000px_50px_rgba(127,0,255,0.2)] grid-background">
      <Logo />
      <Hero />
    </div>
  );
}

export default App;
