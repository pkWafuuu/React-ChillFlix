import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Browse from "./pages/Browse";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
						<Route path="/browse" element={<Browse />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
