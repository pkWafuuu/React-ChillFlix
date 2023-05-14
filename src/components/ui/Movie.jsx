function Movie({ movie }) {
	return (
		<div className="movie">
			<figure className="movie__img--wrapper">
				<img src={movie.Poster} alt="" className="movie__img" />
			</figure>
			<div className="movie__title">{movie.Title}</div>
			<div className="movie__year">{movie.Year}</div>
		</div>
	)
}

export default Movie