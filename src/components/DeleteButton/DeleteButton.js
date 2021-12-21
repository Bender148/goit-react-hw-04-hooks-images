import React from 'react';
import styles from './DeleteButton.module.css';

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button
      type="button"
      onClick={() => onDelete(id)}
      className={styles.DeleteButton}
    >
    </button>
  );
};

export default DeleteButton;