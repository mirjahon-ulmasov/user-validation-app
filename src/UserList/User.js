import React from 'react';

import './User.css';

const UserItem = props => {
  return <li className="user">{`${props.name} (${props.age} years old)`}</li>;
};

export default UserItem;
