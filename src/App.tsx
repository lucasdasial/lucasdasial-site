import "./App.css";
import { TopBar } from "./components/topBar/topBar";
import "./styles/theme.css";

function App() {
  return (
    <div className="app-view">
      <TopBar/>
      <main className="section-view">
      {/* <Avatar/> */}
      <section className="intro">
      <h1>Im lucas alves, <span className="highlight"> software developer</span>, <br /> construo soluções para negócios e apps.</h1>
      <p>Consultor e desenvolvedor na Idopterlabs</p>
      <p>Graduado em Analise e desenvolvimento de sistema</p>
      <p>Pós em engenharia de software</p>
      </section>
      </main>
      <main className="section-view">
      <h1>lucas</h1>
      </main>
      <main className="section-view">
      <h1>lucas</h1>
      </main>
    </div>
  );
}

export default App;
