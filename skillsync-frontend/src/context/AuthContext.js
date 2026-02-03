import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Load auth from localStorage safely
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem("auth");

      if (storedAuth) {
        const parsed = JSON.parse(storedAuth);
        setToken(parsed.token);
        setUser(parsed.user);
      }
    } catch (err) {
      console.error("Invalid auth data in localStorage");
      localStorage.removeItem("auth");
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ login expects FULL backend response
  const login = (data) => {
    const authData = {
      token: data.token,
      user: data.user
    };

    localStorage.setItem("auth", JSON.stringify(authData));
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        login,
        logout,
        loading
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
