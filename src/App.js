import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import DetailsRunMis from "./pages/DetailsRunMis";
import DetailsUpMis from "./pages/DetailsUpMis";
import DetailsPreMis from "./pages/DetailsPreMis";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Updates from "./pages/Updates";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailsRunMis" element={<DetailsRunMis />} />{" "}
          <Route path="/detailsUpMis" element={<DetailsUpMis />} />{" "}
          <Route path="/detailsPreMis" element={<DetailsPreMis />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
