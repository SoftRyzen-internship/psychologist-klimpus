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
          className="top-1/4 px-5 py-[120px] md:w-[624px] md:p-12 md:px-[97px] md:py-[108px] xl:w-[802px] xl:px-[110px] xl:py-[119px] "
        >
          <Notification type="error" />
        </Modal>
      )}
    </>
  );
};
