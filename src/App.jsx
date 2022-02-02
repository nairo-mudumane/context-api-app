import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import { useAuth } from './providers/Auths';
function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h2>useContext</h2>

      <Profile />
      <Login />
    </div>
  );
}

export default App;
