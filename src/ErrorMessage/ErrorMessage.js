import React from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage = props => {
  return (
    <div className={`${styles['error-message']}`}>
      <div className={styles['header-message']}>Invalid input</div>
      <div className={styles['message-context']}>
        {props.children}
        <div className={styles['error-btn']}>
          <button type="button" onClick={props.onOkay}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
