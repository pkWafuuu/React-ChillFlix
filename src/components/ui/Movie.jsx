import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=f5504bbb&i=${movie.imdbID}&plot=${movie.Type}`
      );
      setMovieInfo(data);
      setLoading(false);
    }
    fetchMovieInfo();
  }, []);

  return (
    <>
      {loading ? (
        <div>asdsad</div>
      ) : (
        <div className="movie">
          <div className="movie__wrapper">
            <img src={movie.Poster} alt="" className="movie__img" />
            <div className="movie__info--container">
              <div className="movie__rating">{movieInfo.imdbRating}</div>
              <div className="movie__genre">{movieInfo.Genre}</div>
              <Link to={`/browse/${movieInfo.imdbID}`}>
                <button className="movie__btn">View Info</button>
              </Link>
            </div>
          </div>
          <div className="movie__title">{movie.Title}</div>
          <div className="movie__year">{movie.Year}</div>
        </div>
      )}
    </>
  );
}

export default Movie;
