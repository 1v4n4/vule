import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Header from "./components/Header"; // your custom header component

const App = () => {
  return (
    <Router>
      <Header /> {/* Responsive header with navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
