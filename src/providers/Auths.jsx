import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = React.useState({ name: '' });

  React.useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
      setUser({ name: '' });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
