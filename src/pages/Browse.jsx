import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";

function Browse({ searchMovies, search }) {
  const [newSearch, setNewSearch] = useState(search);
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  function prevPage() {
    if (page <= 1) {
      return;
    } else {
      setPage((prev) => prev - 1);
    }
  }

  function onSearch() {
    fetchSearchedMovies(newSearch);
  }

  async function fetchSearchedMovies(newSearch) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=f5504bbb&s=${
        newSearch || search
      }&page=${page}`
    );
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchSearchedMovies();
  }, [page]);

  return (
    <div className="row">
      <div className="browse">
        <h1 className="browse__title">Browse Movies</h1>
        <input
          type="text"
          className="form__input"
          value={newSearch}
          onKeyPress={(event) => event.key === "Enter" && onSearch()}
          onChange={(event) => setNewSearch(event.target.value)}
        />
        <button className="form__btn" onClick={() => onSearch()}>
          search
        </button>
        {movies ? (
          <>
            <div className="movie__list">
              {movies.slice(0, 8).map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
              ))}
            </div>
            <div className="page__container">
              <button className="page__btn" onClick={() => prevPage()}>
                prev
              </button>
              <input
                type="number"
                value={page}
                onChange={(event) => setPage(event.target.value)}
              />
              <button className="page__btn" onClick={() => nextPage()}>
                next
              </button>
            </div>
          </>
        ) : (
          <>
            <div>error can't find movie</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
