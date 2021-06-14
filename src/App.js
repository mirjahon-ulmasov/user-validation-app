import React, { Fragment, useState } from 'react';

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

  return (
    <Fragment>
      <UserForm onAddUser={addUserHandler} />
      <UserList userList={users} />
    </Fragment>
  );
}

export default App;
