import React from 'react';
import { useAuth } from '../providers/Auths';

export default function Profile() {
  const { user } = useAuth();

  return <div>Nome: {user.name}</div>;
}
