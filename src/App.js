import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import "./App.css";

const api = "http://www.omdbapi.com?apikey=c8f7ec34";

const App = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  const movieSearch = async (movie) => {
    const response = await fetch(`${api}&s=${movie}`);
    const result = await response.json();

    setFilms(result.Search);
  };

  useEffect(() => {
    movieSearch("Pokemon");
  }, []);

  return (
    <div className="app">
      <h1 className="title"> Movie Gallery </h1>
      <div id="explore">
        <input
          className="select"
          placeholder="SEARCH"
          value={searchFilm}
          onChange={(e) => setSearchFilm(e.target.value)}
        />
        
        <div className="btn">
        <button id="search-btn" onClick={() => movieSearch(searchFilm)}>
          SEARCH
        </button>
        </div>

      </div>
      {films?.length > 0 ? (
        <div className="container">
          {films.map((film) => (
            <DisplayCard film={film} />
          ))}
        </div>
      ) : (
        <div className="blank">
          <h1> Could not locate movie </h1>
        </div>
      )}
      ;
    </div>
  );
};

export default App;
