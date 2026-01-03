

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import { useAuth } from "../context/AuthContext";
// import "../styles/auth.css";

// export default function Signup() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await API.post("/auth/register", form);

//       // Auto-login after signup
//       login(res.data);

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card glass glow">
//         <h2>Create Your Account</h2>
//         <p>Join SkillSync and start leveling up 🚀</p>

//         {error && <span className="error">{error}</span>}

//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Password (min 8 chars)"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <button className="btn-primary">Create Account →</button>
//         </form>

//         <span onClick={() => navigate("/login")}>
//           Already have an account? <b>Sign in</b>
//         </span>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/register", form);

      // 🔥 Auto-login after signup
      login(res.data.user, res.data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass glow">
        <h2>Create Your Account</h2>
        <p>Join SkillSync and start leveling up 🚀</p>

        {error && <span className="error">{error}</span>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password (min 8 chars)"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn-primary">Create Account →</button>
        </form>

        <span onClick={() => navigate("/login")}>
          Already have an account? <b>Sign in</b>
        </span>
      </div>
    </div>
  );
}
