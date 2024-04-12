'use client';

import React, { useEffect } from 'react';

import { Modal } from '../Modal/Modal';
import { Notification } from '../Notification';

import { ModalSuccessProps } from './types';

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isModalSuccessOpen,
  onClickCloseModal,
}) => {
  useEffect(() => {
    if (isModalSuccessOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalSuccessOpen]);

  return (
    <>
      {isModalSuccessOpen && (
        <Modal
          onClose={onClickCloseModal}
          className="top-1/4 px-7 py-[108px] md:w-[624px] md:p-12 md:px-24 xl:w-[802px] xl:px-[116px] xl:py-[119px]"
        >
          <Notification type="success" />
        </Modal>
      )}
    </>
  );
};
