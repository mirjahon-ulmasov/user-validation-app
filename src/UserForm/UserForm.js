import React, { useState, useRef } from 'react';

import ErrorMessage from '../UI/ErrorMessage';
import Button from '../UI/Button';
import styles from './UserForm.module.css';

const UserForm = props => {
  // Uncontrolled Component
  // We can use refs instead of states to get data
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Controlled Component
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim() === '' || enteredAge.trim() === '') {
      setError({
        title: 'Invalid input',
        description: 'Please enter a valid name and age (non-empty values).',
      });
    } else if (+enteredAge.trim() < 1) {
      setError({
        title: 'Invalid age',
        description: 'Please enter a valid age (> 0)',
      });
    } else {
      const user = {
        id: Math.random().toString(),
        userName: enteredName,
        age: enteredAge,
      };
      props.onAddUser(user);

      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={styles['main-form']}>
        <div className={styles['form-section']}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
        </div>
        <div className={styles['form-section']}>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
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
    </React.Fragment>
  );
};

export default UserForm;
