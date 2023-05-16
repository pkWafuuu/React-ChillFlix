import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Browse from "./pages/Browse";
import Home from "./pages/Home";

function App() {
  const [search, setSearch] = useState("");

  function searchMovies(event) {
    setSearch(event);
  }

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
