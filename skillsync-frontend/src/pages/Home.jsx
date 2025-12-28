import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}
      <div className="navbar glass">
        <div className="logo">
          ⚡ <span>SkillSync</span>
        </div>

        <div className="nav-links">
          <span onClick={() => navigate("/dashboard")}>Dashboard</span>
          <span onClick={() => navigate("/learn")}>Learn</span>
          <span onClick={() => navigate("/leaderboard")}>Leaderboard</span>
        </div>

        <div className="nav-actions">
          <span onClick={() => navigate("/login")}>Log in</span>
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Get Started
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="hero">
        <div className="ai-tag">✨ AI-Powered Learning</div>

        <h1>
          Level Up Your <br />
          <span className="green">Skills</span> Today
        </h1>

        <p>
          Gamified learning meets AI. Set goals, complete tasks,
          earn XP, and climb the leaderboard. Learning has never been this
          <span className="pink"> addictive</span>.
        </p>

        <div className="hero-stats">
          <div>⚡ <b>50K+</b> Learners</div>
          <div>🔥 <b>1M+</b> Tasks</div>
          <div>🏆 <b>500+</b> Paths</div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Start Learning Free →
          </button>

          <button className="btn-outline" onClick={() => navigate("/learn")}>
            Explore Courses
          </button>
        </div>
      </div>

      {/* ============================= */}
      {/* FEATURES SECTION */}
      {/* ============================= */}
      <div className="features">
        <div className="feature-tag">✨ Powerful Features</div>

        <h2>
          Everything You Need to <span className="pink">Level Up</span>
        </h2>

        <p className="feature-desc">
          Combine the addictiveness of games with the power of AI.  
          Your learning journey starts here.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            🧠
            <h3>AI Learning Plans</h3>
            <p>GPT-powered personalized learning paths that adapt to your pace and style.</p>
          </div>

          <div className="feature-card">
            🎯
            <h3>Goal Tracking</h3>
            <p>Set ambitious goals, break them into topics and tasks. Watch your progress soar.</p>
          </div>

          <div className="feature-card">
            🔥
            <h3>Daily Streaks</h3>
            <p>Build unstoppable momentum. Your streak is your superpower.</p>
          </div>

          <div className="feature-card">
            🏆
            <h3>Earn Badges</h3>
            <p>Collect rare achievements. Show off your dedication and skills.</p>
          </div>

          <div className="feature-card">
            ⚡
            <h3>XP & Levels</h3>
            <p>Every task completed earns XP. Level up and unlock new challenges.</p>
          </div>

          <div className="feature-card">
            👥
            <h3>Leaderboards</h3>
            <p>Compete with learners worldwide. Rise through the ranks.</p>
          </div>
        </div>
      </div>


      {/* ============================= */}
{/* CTA - Ready To Become Unstoppable */}
{/* ============================= */}
<div className="cta-section">
  <div className="cta-card glass">
    <div className="cta-tag">✨ Start Your Journey</div>

    <h2>
      Ready to Become <span className="green">Unstoppable?</span>
    </h2>

    <p>
      Join thousands of learners who are already crushing their goals.
      Your future self will thank you.
    </p>

    <button className="btn-primary cta-btn" onClick={() => navigate("/signup")}>
      ⚡ Get Started Free →
    </button>

    <div className="cta-note">
      No credit card required • Cancel anytime • Unlimited learning
    </div>
  </div>
</div>


    </div>

    
    
  );
  
}
