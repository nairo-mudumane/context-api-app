import React from 'react';
import { AuthContext } from '../providers/Auths';

export default function Profile() {
  const { user } = React.useContext(AuthContext);

  return <div>Nome: {user.name}</div>;
}
