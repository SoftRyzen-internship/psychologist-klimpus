'use client';

import React, { useEffect, Fragment } from 'react';
import { Notification } from '../Notification';
import { ModalNotificationProps } from './types';
import { Dialog, Transition } from '@headlessui/react';

import CloseIcon from '@/public/icons/cross.svg';
import classNames from 'classnames';
import data from '@/data/common.json';

export const Modal: React.FC<ModalNotificationProps> = ({
  isOpen,
  onClose,
  type,
  className,
}) => {
  const { ariaLabel } = data.modal;

  const notificationType = type === 'success' ? 'success' : 'error';

  const modalClasses = classNames(
    'relative flex flex-col w-[328px] bg-white shadow-md rounded-[10px] border-solid border-[1px] border-strokeForm',
    className,
  );

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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop-blur-2x z-1 fixed inset-0 bottom-0 right-0 h-full w-full overscroll-none bg-backdrop" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={modalClasses}>
                <button
                  type="button"
                  aria-label={ariaLabel}
                  onClick={onClose}
                  className="duration-250 absolute right-[21px] top-[21px] transform transition hover:scale-110"
                >
                  <CloseIcon width={24} height={24} />
                </button>
                <Notification type={notificationType} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
