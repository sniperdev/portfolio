import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className={"bg-stone-100 font-mono"}>
      <div className={"px-4 container mx-auto"}>
        <Header></Header>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
