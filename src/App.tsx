import "./App.css";
import Hero from "./components/Hero";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="dark min-h-screen max-w-screen bg-background text-foreground flex flex-col justify-center items-center gap-4">
      <Logo />
      <Hero />
    </div>
  );
}

export default App;
