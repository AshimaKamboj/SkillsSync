import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          ⚡ <span>SkillSync</span>
        </div>

        <div className="nav-links">
          <span onClick={() => navigate("/dashboard")}>Dashboard</span>
          <span onClick={() => navigate("/learn")}>Learn</span>
          <span onClick={() => navigate("/leaderboard")}>Leaderboard</span>
        </div>

        <div className="nav-actions">
          <span className="login" onClick={() => navigate("/login")}>
            Log in
          </span>
          <button onClick={() => navigate("/signup")}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
