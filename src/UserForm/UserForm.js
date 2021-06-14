import React, { useState } from 'react';

import ErrorMessage from '../UI/ErrorMessage';
import Button from '../UI/Button';
import styles from './UserForm.module.css';

const UserForm = props => {
  const [username, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const userChangeHandler = event => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = event => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (username.trim() === '' || age.trim() === '') {
      setError({
        title: 'Invalid input',
        description: 'Please enter a valid name and age (non-empty values).',
      });
    } else if (parseInt(age.trim()) < 1) {
      setError({
        title: 'Invalid age',
        description: 'Please enter a valid age (> 0)',
      });
    } else {
      const user = {
        id: Math.random().toString(),
        userName: username,
        age: age,
      };
      props.onAddUser(user);

      setUserName('');
      setAge('');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles['main-form']}>
        <div className={styles['form-section']}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={userChangeHandler}
          ></input>
        </div>
        <div className={styles['form-section']}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {error && (
        <ErrorMessage
          onConfirm={errorHandler}
          title={error.title}
          description={error.description}
        />
      )}
    </div>
  );
};

export default UserForm;
