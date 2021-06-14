import React from 'react';

import Button from './Button';
import styles from './ErrorMessage.module.css';

const ErrorMessage = props => {
  return (
    <div>
      <div className={styles.overlay} onClick={props.onConfirm} />
      <div className={styles['error-message']}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.description}</p>
          <div className={styles.actions}>
            <Button type="button" onClick={props.onConfirm}>
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
