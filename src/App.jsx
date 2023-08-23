import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listMovies } from './graphql/queries';


function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      const apiData = await API.graphql({ query: listMovies });
      setMovies(apiData.data.listMovies.items);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>My Movies</h1>
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
