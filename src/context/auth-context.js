import { createContext, useContext, useEffect, useState } from "react";
import LoadingPage from "../pages/LoadingPage";
import { createUser, getUser, updateUser } from "../services/users-service";
import * as auth from "../services/sessions-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setUser(null);
      });
  }, []);

  const login = (credentials) => {
    return auth.login(credentials).then(setUser);
  };

  const logout = () => {
    return auth.logout().then(setUser);
  };

  const signup = (credentials) => {
    return createUser(credentials).then(setUser);
  };

  const updateProfile = (data) => {
    return updateUser(data).then(setUser);
  };

  if (isLoading) return <LoadingPage />;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
