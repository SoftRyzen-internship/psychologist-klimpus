'use client';

import React, { useEffect } from 'react';

import { Modal } from '../Modal/Modal';
import { Notification } from '../Notification';

import { ModalErrorProps } from './types';

export const ModalError: React.FC<ModalErrorProps> = ({
  isModalErrorOpen,
  onClickCloseModal,
}) => {
  useEffect(() => {
    if (isModalErrorOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalErrorOpen]);

  return (
    <>
      {isModalErrorOpen && (
        <Modal
          onClose={onClickCloseModal}
          className="top-1/4 px-6 py-8 md:w-[540px] md:p-12 xl:w-[572px] xl:p-16"
        >
          <Notification type="error" />
        </Modal>
      )}
    </>
  );
};
