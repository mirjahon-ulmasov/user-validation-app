import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import styles from './ErrorMessage.module.css';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
  return (
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
  );
};

const ErrorMessage = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
