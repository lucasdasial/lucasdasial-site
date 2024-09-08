import "./App.css";
import Projects from "./components/projects";
import TopBar from "./components/topBar";
import Welcome from "./components/welcome/welcome";

function App() {
  return (
    <div className="app-view">
      <TopBar />
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;
