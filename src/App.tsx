import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="max-w-6xl mx-auto relative overflow-x-hidden">
      <div className="absolute top-8 right-4 fit-content z-10">
        <ThemeToggle />
      </div>
      <Hero className="mb-32" />
      <Bio className="px-12 mb-32" />
      <Projects className="px-12" />
    </main>
  );
}

export default App;
