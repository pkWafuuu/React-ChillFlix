import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Browse from "./pages/Browse";
import Home from "./pages/Home";

function App() {
  const [search, setSearch] = useState("");
	// const [movies, setMovies] = useState([]);

  function searchMovies(event) {
    setSearch(event);
  }

  // async function fetchSearchedMovies() {
  //   const { data } = await axios.get(
  //     `https://www.omdbapi.com/?apikey=f5504bbb&s=${search}`
  //   );
  //   setMovies(data.Search);
	// 	console.log(movies)
  // }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home searchMovies={searchMovies} />} />
          <Route
            path="/browse"
            element={
              <Browse
                // fetchSearchedMovies={fetchSearchedMovies}
                searchMovies={searchMovies}
								// movies={movies}
								search={search}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
