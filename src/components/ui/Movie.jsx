import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
			setTimeout(() => {
				setLoading(false);
			}, 1000);
    }
    fetchMovieInfo();
  }, []);

  return (
    <>
      {loading ? (
        <div className="movie__skeleton">
					<div className="skeleton movie__img--skeleton"></div>
					<div className="skeleton movie__title--skeleton"></div>
					<div className="skeleton movie__year--skeleton"></div>
				</div>
      ) : (
        <div className="movie">
          <div className="movie__wrapper">
            <img src={movie.Poster} alt="No Poster" className="movie__img" />
            <div className="movie__info--container">
							<FontAwesomeIcon icon="star" className="movie__rating--icon" />
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
