import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/ui/Movie";

function Home(){
	// `https://www.omdbapi.com/?apikey=f5504bbb&s=${search}&type=${type}`
	const [movies, setMovies] = useState([])

	async function fetchMovies(){
		const { data } = await axios.get(
			'https://www.omdbapi.com/?apikey=f5504bbb&s=fast'
			);
		setMovies(data.Search)
	}

	useEffect(() => {
		fetchMovies()
	},[])

	return (
		<section id="landing">
			<div className="row">
				<header>
					<h1 className="header__title">
						HIGH QUALITY FLICKS TO <span className="text__color"><br/>WATCH</span> AND  
						<span className="text__color"> CHILL</span>
					</h1>
					<form action="">
						<input type="text" name="search" className="form__input" />
						<button className="form__btn">search</button>
					</form>
				</header>
				<div className="featured">
					<h2 className="landing__featured"><span className="text__color">FEATURED:</span></h2>
					<div className="movie__list">
						{movies.slice(0,4).map((movie) => <Movie movie={movie} key={movie.imdbID}/>)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home