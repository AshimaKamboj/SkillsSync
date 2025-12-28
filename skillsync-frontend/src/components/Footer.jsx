import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            ⚡ <span>SkillSync</span>
          </div>
          <p>
            AI-powered gamified learning platform.  
            Level up your skills, one task at a time.
          </p>

          <div className="socials">
            <span>🐦</span>
            <span>💬</span>
            <span>🔗</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <p>Courses</p>
            <p>Dashboard</p>
            <p>Leaderboard</p>
            <p>Pricing</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2024 SkillSync. All rights reserved.</span>
        <span>Made with ❤️ for learners everywhere</span>
      </div>
    </footer>
  );
}
