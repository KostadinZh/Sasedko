import { createContext, useContext, useState } from 'react';

export const ROLES = {
  admin: 'Администратор',
  organizer: 'Организатор',
  volunteer: 'Доброволец',
};

const AuthContext = createContext(null);

// Демонстрационна автентикация – данните се пазят само в паметта.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (name, email, role) => setUser({ name, email, role });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
