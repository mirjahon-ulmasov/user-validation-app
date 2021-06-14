import React from 'react';

import UserItem from './User';
import styles from './UserList.module.css';

const UserList = props => {
  const userList =
    props.userList.length > 0 ? (
      props.userList.map(user => {
        return <UserItem key={user.id} name={user.userName} age={user.age} />;
      })
    ) : (
      <div className={styles.empty}>
        <h2>No Users Found</h2>
        <hr />
      </div>
    );

  return (
    <div className={styles['main-list']}>
      <ul>{userList}</ul>
    </div>
  );
};

export default UserList;
