import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Movie from "../components/ui/Movie";

function Browse({ searchMovies, search }) {
	const [movies, setMovies] = useState();

  async function fetchSearchedMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=f5504bbb&s=${search}`
    );
    setMovies(data.Search);
		console.log(movies)
  }

  useEffect(() => {
    fetchSearchedMovies();
  }, [search]);

  return (
    <div className="row">
      <div className="browse">
        <h1 className="browse__title">Browse Movies</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            searchMovies(event.target[0].value);
          }}
        >
          <input type="text" name="search" className="form__input" />
          <button className="form__btn">search</button>
        </form>
        {movies ? (
          <div className="movie__list">
            {movies.slice(0, 8).map((movie) => (
              <Movie movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <><div>error can't find movie</div></>
        )}
      </div>
    </div>
  );
}

export default Browse;
