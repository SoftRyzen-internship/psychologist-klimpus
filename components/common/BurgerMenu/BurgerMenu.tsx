import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { NavBar } from '@/components/common/NavBar';
import { Logo } from '@/components/common/Logo';
import { Contacts } from '@/components/common/Contacts';

import CloseIcon from '@/public/icons/cross.svg';

import { IBurgerMenuProps } from './type';

import data from '@/data/common.json';

const {
  linksText: { contacts },
  ariaLabelClose,
} = data;

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" fixed inset-0 bg-bgMenu backdrop-blur-[3.5px] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className=" pointer-events-auto relative w-screen bg-white md:h-[626px] md:w-[384px] md:rounded-bl-[20px]">
                  <div className=" mx-auto flex h-full max-w-[480px] flex-col justify-between px-[16px] pb-[36px] pt-4 md:px-[30px] md:pb-[48px] md:pt-[30px]">
                    <div>
                      <div className="mb-6 flex items-center justify-between md:mb-4">
                        <Logo className="md:hidden" onClick={onClose} />

                        <button
                          type="button"
                          onClick={onClose}
                          aria-label={ariaLabelClose}
                          className="md:ml-auto"
                        >
                          <CloseIcon className="h-[36px] w-[36px]" />
                        </button>
                      </div>
                      <div className=" px-[20px] md:px-[18px]">
                        <NavBar />
                      </div>
                    </div>
                    <div className=" px-[20px] md:px-[18px]">
                      <p className="mb-6 font-raleway text-lg font-semibold leading-[1.35]">
                        {contacts}
                      </p>
                      <Contacts />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
