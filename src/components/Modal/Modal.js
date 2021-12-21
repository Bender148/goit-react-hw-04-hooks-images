import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseButton from '../CloseButton/CloseButton';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImgUrl }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => event.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleBackdropClick = event =>
    event.currentTarget === event.target && onClose();

  const handleLoad = () => setLoaded(true);

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        {loaded && <CloseButton onClose={onClose} />}
        <img src={largeImgUrl} alt="Gallery item" onLoad={handleLoad} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
};