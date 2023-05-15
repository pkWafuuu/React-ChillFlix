import { useState } from "react";
import Movie from "../components/ui/Movie";

function Browse() {
	const [movies, setMovies] = useState([])

  return (
    <div className="row">
      <div className="browse">
        <h1 className="browse__title">Browse Movies</h1>
        <form action="">
          <input type="text" name="search" className="form__input" />
          <button className="form__btn">search</button>
        </form>
        {!movies ?
					<div className="movie__list">
          {movies.slice(0, 6).map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div> :
				<></>}
      </div>
    </div>
  );
}

export default Browse;
