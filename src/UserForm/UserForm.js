import React, { useState } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './UserForm.css';

const UserForm = props => {
  const [username, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const userChangeHandler = event => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = event => {
    setAge(event.target.value);
  };

  const okayHandler = () => {
    setIsValid(true);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (username.trim() === '' || age.trim() === '') {
      setIsValid(false);
    } else if (parseInt(age.trim()) < 0) {
      setIsValid(false);
    } else {
      const user = {
        id: Math.random().toString(),
        userName: username,
        age: age,
      };
      setIsValid(true);
      props.onAddUser(user);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="main-form">
        <div className="form-section">
          <label>Username</label>
          <input onChange={userChangeHandler} type="text"></input>
        </div>
        <div className="form-section">
          <label>Age (Years)</label>
          <input onChange={ageChangeHandler} type="number"></input>
        </div>
        <button className="button" type="submit">
          Add User
        </button>
      </form>
      {!isValid ? (
        <ErrorMessage onOkay={okayHandler}>
          {username.trim() === '' || age.trim() === '' ? (
            <p>Please enter a valid name and age (non-empty values).</p>
          ) : (
            <p>Please enter a valid age ({'>'}0)</p>
          )}
        </ErrorMessage>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserForm;
