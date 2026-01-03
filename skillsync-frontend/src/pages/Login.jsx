// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import { useAuth } from "../context/AuthContext";
// import "../styles/auth.css";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await API.post("/auth/login", form);

//       // Save token + user in global AuthContext
//       login(res.data);

//       // Redirect after login
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card glass glow">
//         <h2>Welcome Back</h2>
//         <p>Sign in to continue your learning journey ✨</p>

//         {error && <span className="error">{error}</span>}

//         <form onSubmit={handleSubmit}>
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
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <button className="btn-primary">Sign In →</button>
//         </form>

//         <span onClick={() => navigate("/signup")}>
//           Don’t have an account? <b>Sign up free</b>
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

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", form);

      // 🔥 Correctly save user + token
      login(res.data.user, res.data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass glow">
        <h2>Welcome Back</h2>
        <p>Sign in to continue your learning journey ✨</p>

        {error && <span className="error">{error}</span>}

        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn-primary">Sign In →</button>
        </form>

        <span onClick={() => navigate("/signup")}>
          Don’t have an account? <b>Sign up free</b>
        </span>
      </div>
    </div>
  );
}

