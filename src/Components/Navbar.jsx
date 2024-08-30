import { useNavigate } from "react-router-dom";
import "./Css/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => navigate("/")} className="button">
          <i className="fa-solid fa-house" />
        </button>
        <button onClick={() => navigate("/blog")} className="button">
          <i className="fa-solid fa-camera-retro" />
        </button>
        <button className="button">
          <i className="fa-solid fa-moon" />
          {/* <i className="fa-solid fa-sun"/> */}
        </button>
      </div>
    </div>
  );
}
