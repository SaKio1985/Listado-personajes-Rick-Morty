import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterSearch() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [info, setInfo] = useState({});

  // Función para construir la URL de búsqueda
  const buildSearchUrl = (currentPage = 1) => {
    let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

    if (searchName.trim()) {
      url += `&name=${encodeURIComponent(searchName.trim())}`;
    }

    if (statusFilter) {
      url += `&status=${statusFilter}`;
    }

    return url;
  };

  // Función para buscar personajes
  const searchCharacters = async (currentPage = 1, resetResults = true) => {
    setLoading(true);

    try {
      const url = buildSearchUrl(currentPage);
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setCharacters(
          resetResults ? data.results : [...characters, ...data.results]
        );
        setInfo(data.info);
        setTotalPages(data.info.pages);
        setPage(currentPage);
      } else {
        // No hay resultados
        setCharacters([]);
        setInfo({});
        setTotalPages(0);
      }
    } catch (error) {
      console.error("Error searching characters:", error);
      setCharacters([]);
      setInfo({});
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para búsqueda inicial
  useEffect(() => {
    searchCharacters(1, true);
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchCharacters(1, true);
  };

  // Función para cambiar el filtro de estado
  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    setPage(1);
    // Búsqueda automática cuando cambia el filtro
    setTimeout(() => {
      const url = buildSearchUrl(1);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setCharacters(data.results);
            setInfo(data.info);
            setTotalPages(data.info.pages);
            setPage(1);
          } else {
            setCharacters([]);
            setInfo({});
            setTotalPages(0);
          }
        })
        .catch((error) => {
          console.error("Error filtering characters:", error);
          setCharacters([]);
        });
    }, 100);
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setSearchName("");
    setStatusFilter("");
    setPage(1);
    searchCharacters(1, true);
  };

  // Función para cargar más páginas
  const loadMoreCharacters = () => {
    if (page < totalPages) {
      searchCharacters(page + 1, false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center mb-4">🔍 Buscar Personajes</h2>

          {/* Formulario de búsqueda */}
          <form onSubmit={handleSearch} className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="searchName" className="form-label">
                Buscar por nombre:
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white border-success"
                id="searchName"
                placeholder="Ej: Rick, Morty, Beth..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                style={{ borderColor: "#98FF98" }}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="statusFilter" className="form-label">
                Filtrar por estado:
              </label>
              <select
                className="form-select bg-dark text-white border-success"
                id="statusFilter"
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                style={{ borderColor: "#98FF98" }}
              >
                <option value="">Todos los estados</option>
                <option value="alive">Vivo</option>
                <option value="dead">Muerto</option>
                <option value="unknown">Desconocido</option>
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button
                type="submit"
                className="btn btn-success me-2"
                style={{
                  backgroundColor: "#98FF98",
                  borderColor: "#98FF98",
                  color: "black",
                }}
                disabled={loading}
              >
                {loading ? "Buscando..." : "Buscar"}
              </button>
            </div>
          </form>

          {/* Botones de filtros rápidos */}
          <div className="row mb-4">
            <div className="col-12">
              <h6 className="text-muted">Filtros rápidos:</h6>
              <div className="btn-group flex-wrap" role="group">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    statusFilter === "alive"
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => handleStatusChange("alive")}
                  style={{
                    backgroundColor:
                      statusFilter === "alive" ? "#98FF98" : "transparent",
                    borderColor: "#98FF98",
                    color: statusFilter === "alive" ? "black" : "#98FF98",
                  }}
                >
                  💚 Vivos
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    statusFilter === "dead"
                      ? "btn-danger"
                      : "btn-outline-danger"
                  }`}
                  onClick={() => handleStatusChange("dead")}
                >
                  💀 Muertos
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    statusFilter === "unknown"
                      ? "btn-warning"
                      : "btn-outline-warning"
                  }`}
                  onClick={() => handleStatusChange("unknown")}
                >
                  ❓ Desconocidos
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={clearFilters}
                >
                  🔄 Limpiar filtros
                </button>
              </div>
            </div>
          </div>

          {/* Información de resultados */}
          {info.count && (
            <div className="alert alert-info bg-dark border-info text-info">
              <strong>Resultados:</strong> {info.count} personajes encontrados
              {searchName && <span> para "{searchName}"</span>}
              {statusFilter && (
                <span>
                  {" "}
                  con estado:{" "}
                  {statusFilter === "alive"
                    ? "Vivo"
                    : statusFilter === "dead"
                    ? "Muerto"
                    : "Desconocido"}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Resultados */}
      {loading && characters.length === 0 ? (
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#98FF98" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Buscando personajes...</p>
        </div>
      ) : (
        <>
          {characters.length > 0 ? (
            <>
              <div className="row">
                {characters.map((character) => (
                  <div className="col-md-4 col-lg-3 mb-4" key={character.id}>
                    <div className="card bg-dark border-success h-100">
                      <div className="card-body">
                        <Character character={character} />

                        {/* Badge de estado */}
                        <div className="mt-2">
                          <span
                            className={`badge ${
                              character.status === "Alive"
                                ? "bg-success"
                                : character.status === "Dead"
                                ? "bg-danger"
                                : "bg-warning"
                            }`}
                          >
                            {character.status === "Alive"
                              ? "💚 Vivo"
                              : character.status === "Dead"
                              ? "💀 Muerto"
                              : "❓ Desconocido"}
                          </span>
                          <span className="badge bg-info ms-2">
                            {character.species}
                          </span>
                        </div>

                        {/* Información adicional */}
                        <div className="mt-2 text-muted small">
                          <div>
                            <strong>Género:</strong> {character.gender}
                          </div>
                          <div>
                            <strong>Ubicación:</strong>{" "}
                            {character.location.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón para cargar más */}
              {page < totalPages && (
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={loadMoreCharacters}
                    disabled={loading}
                    style={{
                      backgroundColor: "#98FF98",
                      borderColor: "#98FF98",
                      color: "black",
                    }}
                  >
                    {loading
                      ? "Cargando..."
                      : `Cargar más (Página ${page + 1} de ${totalPages})`}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="alert alert-warning bg-dark border-warning text-warning">
                <h4>😅 No se encontraron personajes</h4>
                <p>Intenta cambiar los filtros o buscar otro nombre</p>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={clearFilters}
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CharacterSearch;
