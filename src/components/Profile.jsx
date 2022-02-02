import React from 'react';
import { useAuth } from '../providers/Auths';

export default function Profile() {
  const { user } = useAuth();

  return <div style={{ marginTop: '2rem' }}>Nome: {user.name}</div>;
}
