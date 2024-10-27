import { useEffect, useState } from 'react';
import Character from './Character';

// Componente Navpage separado
function Navpage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage((prevPage) => prevPage + 1)}
        style={{
          backgroundColor: '#98FF98', // Verde menta
          border: 'none',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        Next Page
      </button>
    </header>
  );
}

// Componente principal CharacterList
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`,
        );
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [page]); // Agregamos page como dependencia

  return (
    <div className="container">
      <Navpage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}

      <Navpage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
