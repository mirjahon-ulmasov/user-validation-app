import React, { useState } from 'react';

import './App.css';
import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevUser => {
      return [user, ...prevUser];
    });
  };

  console.log(users);

  return (
    <div className="main-page">
      <UserForm onAddUser={addUserHandler} />
      <UserList userList={users} />
    </div>
  );
}

export default App;
