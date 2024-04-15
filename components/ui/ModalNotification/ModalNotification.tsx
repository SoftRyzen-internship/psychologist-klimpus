'use client';

import React, { useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import { Notification } from '../Notification';
import { ModalNotificationProps } from './types';

export const ModalNotification: React.FC<ModalNotificationProps> = ({
  isOpen,
  onClose,
  type,
  modalClassName,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} className={modalClassName}>
          <Notification type={type} />
        </Modal>
      )}
    </>
  );
};
