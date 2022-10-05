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
// TODO: resume e z ogonkiem
// TODO: github na osobnej stronie
export default App;
