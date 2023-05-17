import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

function App() {
  const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([])

  function searchMovies(event) {
    setSearch(event);
  }

	async function fetchMovies(){
		const { data } = await axios.get(
			'https://www.omdbapi.com/?apikey=f5504bbb&s=horror'
			);
		setMovies(data.Search)
	}

	useEffect(() => {
		fetchMovies()
	},[]);
	

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home searchMovies={searchMovies} movies={movies}/>} />
          <Route
            path="/browse"
            element={
              <Browse
                searchMovies={searchMovies}
								search={search}
              />
            }
					/>
					<Route path="/browse/:id" element={<MovieInfo movies={movies}/>} />
        </Routes>
				<Footer />
      </div>
    </Router>
  );
}

export default App;
