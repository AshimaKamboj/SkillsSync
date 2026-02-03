import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar glass">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>
        ⚡ <span>SkillSync</span>
      </div>

      {/* Center Links */}
      <div className="nav-links">
        {isAuthenticated && (
          <>
            <span onClick={() => navigate("/dashboard")}>Dashboard</span>
            <span onClick={() => navigate("/learn")}>Learn</span>
            <span onClick={() => navigate("/leaderboard")}>Leaderboard</span>
          </>
        )}
      </div>

      {/* Right Actions */}
      <div className="nav-actions">
        {!isAuthenticated ? (
          <>
            <span className="login" onClick={() => navigate("/login")}>
              Log in
            </span>

            <button
              className="btn-primary"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <span className="user-name">
              👋 Hi, <b>{user?.name}</b>
            </span>

            <button className="btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
