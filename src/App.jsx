import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Context/ThemeContext";
import "./style.css"

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
