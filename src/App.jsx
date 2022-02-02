import React from 'react';
import Profile from './components/Profile';
import { useAuth } from './providers/Auths';
function App() {
  const { user, setUser } = useAuth();
  console.log(user);

  return (
    <div>
      Ola mundo
      <input
        type="text"
        onChange={({ target }) => setUser({ name: target.value })}
      />
      <Profile />
    </div>
  );
}

export default App;
