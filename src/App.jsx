import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import N from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <N />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
