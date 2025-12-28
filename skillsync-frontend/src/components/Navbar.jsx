import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const nav = useNavigate();

  return (
    <div className="navbar">
      <div className="logo" onClick={() => nav("/")}>
        ⚡ SkillSync
      </div>

      <div className="nav-links">
        <span onClick={() => nav("/dashboard")}>Dashboard</span>
        <span onClick={() => nav("/learn")}>Learn</span>
        <span onClick={() => nav("/leaderboard")}>Leaderboard</span>
      </div>

      <div className="nav-actions">
        <span className="login" onClick={() => nav("/login")}>Log in</span>
        <button onClick={() => nav("/signup")}>Get Started</button>
      </div>
    </div>
  );
}
