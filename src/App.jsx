import { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterSearch from "./components/CharacterSearch";

function App() {
  const [currentView, setCurrentView] = useState("characters");

  return (
    <div className="bg-dark text-white min-vh-100">
      <nav className="navbar navbar-dark bg-dark border-bottom border-success">
        <div className="container">
          <h1 className="navbar-brand display-4 text-center w-100 mb-0">
            Rick And Morty
          </h1>
        </div>
      </nav>

      {/* Navegación entre secciones */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-4">
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn ${
                    currentView === "characters"
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setCurrentView("characters")}
                  style={{
                    backgroundColor:
                      currentView === "characters" ? "#98FF98" : "transparent",
                    borderColor: "#98FF98",
                    color: currentView === "characters" ? "black" : "#98FF98",
                  }}
                >
                  📋 Todos los Personajes
                </button>
                <button
                  type="button"
                  className={`btn ${
                    currentView === "search"
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setCurrentView("search")}
                  style={{
                    backgroundColor:
                      currentView === "search" ? "#98FF98" : "transparent",
                    borderColor: "#98FF98",
                    color: currentView === "search" ? "black" : "#98FF98",
                  }}
                >
                  🔍 Buscar y Filtrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      {currentView === "characters" ? <CharacterList /> : <CharacterSearch />}
    </div>
  );
}

export default App;
