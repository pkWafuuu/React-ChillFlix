import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";
import browse from "../assets/browse.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Browse({ search }) {
  const [newSearch, setNewSearch] = useState(search);
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
	const [error, setError] = useState('')
	const [load, setLoad] = useState(false)

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
			fetchSearchedMovies()
		} else {
			setPage(1);
		}
  }

  async function fetchSearchedMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=f5504bbb&s=${
        newSearch
      }&page=${page}`
    );
		if(data.Response === 'True'){
			setMovies(data.Search);
			setLoad(true)
		} else if(data.Response === 'False'){
			setLoad(false)
			setError(data.Error)
		}
  }

  useEffect(() => {
		if(!!newSearch){
			fetchSearchedMovies();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
		<section id="browse">
			{console.log(movies)}
      <div className="row">
        <div className="browse__container">
          <h1 className="browse__title">Browse <span className="text__color">Movies</span></h1>
          <div className="browse__search--container">
            <input
              type="text"
              className="form__input"
							placeholder="Search:"
              value={newSearch}
              onKeyPress={(event) => event.key === "Enter" && onSearch()}
              onChange={(event) => setNewSearch(event.target.value)}
            />
            <button className="form__btn" onClick={() => onSearch()}>
              <FontAwesomeIcon icon="magnifying-glass" className="icon" />
            </button>
          </div>

          {load ? (
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
                  onChange={(event) => setPage(event.target.value)}
                />
                <button className="page__btn" onClick={() => nextPage()}>
                  <FontAwesomeIcon icon="greater-than" />
                </button>
              </div>
            </>
          ) : (
            <div className="browse__empty--container">
              <figure className="browse__img--wrapper">
								<img src={browse} alt="" className="browse__img"/>
							</figure>
							{error ? (
								<div className="browse__msg">{error}</div>
							) : (
							<div className="browse__msg">
								Search For Your <span className="text__color">Favorite</span> Movie
							</div>)
							}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Browse;
