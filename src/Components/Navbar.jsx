import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, switchTheme } = useTheme();

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => navigate("/")} className="button">
          <i className="fa-solid fa-house" />
        </button>
        <button onClick={() => navigate("/blog")} className="button">
          <i className="fa-solid fa-camera-retro" />
        </button>
        <button onClick={switchTheme} className="button">
          {theme === "light" ? (
            <i className="fa-solid fa-moon" />
          ) : (
            <i className="fa-solid fa-sun" />
          )}
        </button>
      </div>
    </div>
  );
}
