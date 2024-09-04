import "./App.css";
import Welcome from "./components/welcome/welcome";

function App() {
  return (
    <>
      <div className="app-view">
        <header className="header_container">
          <div className="header">
            <h1>.dasial</h1>

            <nav className="nav">
              <a href="">Projetos</a>

              <a href="">Trabalho</a>
              <a href="">Contato</a>
            </nav>
          </div>
        </header>
        <Welcome />
      </div>
    </>
  );
}

export default App;
