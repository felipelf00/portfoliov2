import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="max-w-6xl mx-auto">
      <Hero className="mb-32 h-screen" />
      <Bio className="px-12 mb-32" />
      <Projects className="px-12" />
    </main>
  );
}

export default App;
