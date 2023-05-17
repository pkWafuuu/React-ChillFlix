import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Browse({ search }) {
  const [newSearch, setNewSearch] = useState();
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
		if(page === 1){
			fetchSearchedMovies();
		} else {
			setPage(1);
		}
  }

  async function fetchSearchedMovies() {
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
    <section id="browse">
      <div className="row">
        <div className="browse__container">
          <h1 className="browse__title">Browse <span className="text__color">Movies</span></h1>
          <div className="browse__search--container">
            <input
              type="text"
              className="form__input"
              value={newSearch}
              onKeyPress={(event) => event.key === "Enter" && onSearch()}
              onChange={(event) => setNewSearch(event.target.value)}
            />
            <button className="form__btn" onClick={() => onSearch()}>
              <FontAwesomeIcon icon="magnifying-glass" className="icon" />
            </button>
          </div>

          {movies ? (
            <>
              <div className="movie__list">
                {movies.slice(0, 8).map((movie) => (
                  <Movie movie={movie} key={movie.imdbID} />
                ))}
              </div>
              <div className="page__container">
                <button className="page__btn" onClick={() => prevPage()}>
								<FontAwesomeIcon icon="less-than" />
                </button>
                <input
                  className="page__input"
                  type="number"
                  value={page}
                  onChange={(event) => {setPage(event.target.value); setPage(1)}}
                />
                <button className="page__btn" onClick={() => nextPage()}>
                  <FontAwesomeIcon icon="greater-than" />
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
    </section>
  );
}

export default Browse;
