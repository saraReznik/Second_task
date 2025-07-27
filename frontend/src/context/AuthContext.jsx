// import { createContext, useContext, useEffect, useState } from 'react';
// import { jwtDecode } from 'jwt-decode';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('jwtToken'));
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//       } catch (err) {
//         console.error('Invalid token:', err);
//         logout();
//       }
//     }
//   }, [token]);

//   const login = (newToken) => {
//     localStorage.setItem('jwtToken', newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem('jwtToken');
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from 'react';

const parseJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    return null;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = parseJwt(token);
      if (decoded) {
        const username = decoded.name || decoded.unique_name || decoded.sub || 'User';
        setUser({ name: username });
      } else {
        setUser(null);
      }
    }
  }, [token]);

  const login = (newToken) => {
    localStorage.setItem('jwtToken', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
