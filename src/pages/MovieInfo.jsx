import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/ui/Movie";

function MovieInfo({ movies }) {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [featured, setFeatured] = useState(movies);

  function featuredMovies() {
    setFeatured(movies.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    async function fetchMovieInfo() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=f5504bbb&i=${id}&plot=full`
      );
      setMovieInfo(data);
    }
    fetchMovieInfo();
    featuredMovies();
  }, [id]);

  return (
    <section id="movie-info">
      <div className="movie__info--row">
        <div className="movieInfo__container">
          <div className="movieInfo__details">
            <div className="movieInfo__main-details--container">
              <img src={movieInfo.Poster} alt="" className="movieInfo__img" />
              <div className="movieInfo__details--container">
                <h1 className="movieInfo__title">{movieInfo.Title}</h1>
                <div className="movieInfo__year">{movieInfo.Year}</div>
                <div className="movieInfo__genre">{movieInfo.Genre}</div>
                <div className="movieInfo__rating--title">IMDB Rating:</div>
                <div className="movieInfo__rating--container">
                  <FontAwesomeIcon icon="star" className="movieInfo__icon" />
                  <div className="movieInfo__rating">
                    {movieInfo.imdbRating}
                  </div>
                </div>
                <div className="movieInfo__rating--container">
                  <FontAwesomeIcon icon="heart" className="movieInfo__icon" />
                  <div className="movieInfo__rating">{movieInfo.imdbVotes}</div>
                </div>
                <div className="movieInfo__other-details--container">
                  <div className="movieInfo__other-details">
                    Rated: {movieInfo.Rated}
                  </div>
                  <div className="movieInfo__other-details">
                    Type: {movieInfo.Type}
                  </div>
                  <div className="movieInfo__other-details">
                    Runtime: {movieInfo.Runtime}
                  </div>
                  <div className="movieInfo__people--container">
                    <div className="movieInfo__director--container">
                      <div className="movieInfo__people">Director: <br/>
											{movieInfo.Director}
											</div>
                    </div>
                    <div className="movieInfo__actors--container">
                      <div className="movieInfo__people">Actors:<br/>
                        {movieInfo.Actors}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movieInfo__plot--container">
              <h3 className="plot-summary">Plot Summary</h3>
              <p className="movieInfo__plot">{movieInfo.Plot}</p>
            </div>
          </div>
          <div className="movieInfo__feat--section">
            <div className="movieInfo__featured--title">Featured:</div>
            <div className="movieInfo__featured--container">
              {featured.slice(0, 6).map((movie) => (
                <div className="movieInfo__featured">
                  <div className="movieInfo__feat--wrapper">
                    <img src={movie.Poster} alt="" className="movie__img" />
                    <div className="movie__info--container">
                      <Link to={`/browse/${movie.imdbID}`}>
                        <button className="featured__btn">View Info</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieInfo;
