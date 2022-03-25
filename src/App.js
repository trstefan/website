import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Home></Home>
      <Footer></Footer>
    </Router>
  );
}

export default App;
