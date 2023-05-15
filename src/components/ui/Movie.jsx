import axios from "axios";
import { useState, useEffect } from "react"

function Movie({ movie }) {
	const [movieInfo, setMovieInfo] = useState();
	const [loading, setLoading] = useState(true)

	async function fetchMovieInfo(){
		const { data } = await axios.get(`https://www.omdbapi.com/?apikey=f5504bbb&i=${movie.imdbID}&plot=${movie.Type}`)
		setMovieInfo(data);
		setLoading(false)
	}

	useEffect(() => {
		fetchMovieInfo()
	},[])

	return (
		<>
		{loading ? 
			<div>asdsad</div> 
		:
			<div className="movie">
			<div className="movie__wrapper">
				<img src={movie.Poster} alt="" className="movie__img" />
				<div className="movie__info--container">
					<div className="movie__rating">{movieInfo.imdbRating}</div>
					<div className="movie__genre">{movieInfo.Genre}</div>
					<button className="movie__btn">View Info</button>
				</div>
			</div>
			<div className="movie__title">{movie.Title}</div>
			<div className="movie__year">{movie.Year}</div>
		</div>}
		</>
	)
}

export default Movie