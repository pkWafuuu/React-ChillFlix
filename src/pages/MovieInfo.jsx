import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function MovieInfo(){
	const { id } = useParams()
	const [ movieInfo, setMovieInfo ] = useState([])
	
	useEffect(() => {
		async function fetchMovieInfo(){
			const { data } = await axios.get(`https://www.omdbapi.com/?apikey=f5504bbb&i=${id}&plot=full`)
			setMovieInfo(data)
		}
		fetchMovieInfo()
	},[])

	return(
		<section id="movie-info">
			<div className="row">
				<div className="movieInfo__details">
					<img src={movieInfo.Poster} alt="" className="movieInfo__img" />
					<div className="movieInfo__details--container">
						<h1 className="movieInfo__title">{movieInfo.Title}</h1>
						<div className="movieInfo__year">{movieInfo.Year}</div>
						<div className="movieInfo__genre">{movieInfo.Genre}</div>
						<div className="movieInfo__rating">{movieInfo.imdbRating}</div>
						<div className="movieInfo__rating">{movieInfo.imdbVotes}</div>
					</div>
				</div>
				<div className="movieInfo__description--container">
					<div className="movieInfo__plot--container">
						<h2 className="plot-summary">Plot Summary</h2>
						<p className="movieInfo__plot">{movieInfo.Plot}</p>
					</div>
					<div className="movieInfo__people--container">
						<div className="movieInfo__director--container">
							<div className="movieInfo__position">Director</div>
							<div className="movieInfo__director">{movieInfo.Director}</div>
						</div>
						<div className="movieInfo__actors--container">
							<div className="movieInfo__position">Actors</div>
							<div className="movieInfo__actors">{movieInfo.Actors}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	
	)
}

export default MovieInfo