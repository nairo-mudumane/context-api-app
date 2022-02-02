import React from 'react';
import { useAuth } from '../providers/Auths';

export default function Login() {
  const [form, setForm] = React.useState('');
  const { setUser } = useAuth();

  function handleLogin() {
    const newUser = { name: form };
    window.localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }

  function handleLogout() {
    window.localStorage.removeItem('user');
    setUser('');
  }

  return (
    <div>
      <input
        type="text"
        value={form}
        onChange={({ target }) => setForm(target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
