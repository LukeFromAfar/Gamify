import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/getUser`, { withCredentials: true })
    .then((res) => { 
        setUser(res.data.user);
    })
    .catch((err) => {
        console.log(err, "ERROR AUTH")
        setUser(null);
    });
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider