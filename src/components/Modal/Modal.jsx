import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.modal}>
        <img src={props.imageForModal} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageForModal: PropTypes.string.isRequired,
};
