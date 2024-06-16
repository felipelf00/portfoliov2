import "./App.css";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Hero className="mb-32" />
      <Bio className="px-12 mb-32" />
      <Projects className="px-12" />
    </>
  );
}

export default App;
