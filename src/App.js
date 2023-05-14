import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Nav>
      </div>
    </Router>
  );
}

export default App;
