import "../styles/dashboard.css";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const data = {
    xp: 12450,
    streak: 14,
    tasksDone: 156,
    badges: 12,
    level: 14,
    levelXP: 2450,
    levelTarget: 5000,
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>
          Welcome back, <span>{user?.name || "Learner"}</span> 👋
        </h1>
        <p>Keep up the great work! You're crushing it.</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total XP</h4>
          <h2>{data.xp.toLocaleString()}</h2>
        </div>

        <div className="stat-card">
          <h4>Streak</h4>
          <h2>{data.streak} days</h2>
        </div>

        <div className="stat-card">
          <h4>Tasks Done</h4>
          <h2>{data.tasksDone}</h2>
        </div>

        <div className="stat-card">
          <h4>Badges</h4>
          <h2>{data.badges}</h2>
        </div>
      </div>

      {/* Level Progress */}
      <div className="level-card">
        <div className="level-info">
          <span className="level-badge">{data.level}</span>
          <strong>Level {data.level}</strong>
          <span className="xp-text">
            {data.levelXP} / {data.levelTarget} XP
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(data.levelXP / data.levelTarget) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* Tasks */}
        <div className="tasks-card">
          <h3>📘 Today's Tasks</h3>

          <div className="task">
            <input type="checkbox" />
            <div>
              <strong>Complete React fundamentals quiz</strong>
              <span>15 min</span>
            </div>
            <span className="xp">+50 XP</span>
          </div>

          <div className="task">
            <input type="checkbox" />
            <div>
              <strong>Build a todo app component</strong>
              <span>30 min</span>
            </div>
            <span className="xp">+100 XP</span>
          </div>

          <div className="task completed">
            <input type="checkbox" checked readOnly />
            <div>
              <strong>Review state management concepts</strong>
              <span>10 min</span>
            </div>
            <span className="xp">+30 XP</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="ai-card">
            <h3>🤖 AI Suggestion</h3>
            <p>
              Focus on <span>React Hooks</span> today. You're close to mastering
              this topic!
            </p>
            <small>⏱ 45 min • ⚡ +120 XP</small>
          </div>

          <div className="badges-card">
            <h3>🏆 Recent Badges</h3>

            <div className="badge blue">
              <strong>On Fire</strong>
              <span>7-day streak</span>
            </div>

            <div className="badge purple">
              <strong>Speed Learner</strong>
              <span>10 tasks in one day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
