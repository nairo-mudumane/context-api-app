import React from 'react';

type UserType = { name: string; lastname: string; email: string };

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    name: '',
    lastName: '',
    email: '',
  },
};
