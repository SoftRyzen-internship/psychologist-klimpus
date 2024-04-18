'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { sendMessage } from '@/api/telegram';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { CheckBox } from '@/components/ui/Checkbox/Checkbox';
import { Loader } from '@/components/ui/Loader/Loader';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

import { FormData } from './types';

import form from '@/data/form.json';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notificationType, setNotificationType] = useState<'error' | 'success'>(
    'error',
  );

  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  useFormPersist('FormData', {
    watch,
    setValue,
    exclude: ['checkbox'],
  });

  const checkboxInput = watch(form.checkBox.name);

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      setIsLoading(true);
      console.log("Ім'я:", data.name);
      console.log('Телефон:', data.phone);
      console.log('Email:', data.email);

      const message = `Ім'я: ${data.name} %0AТелефон: ${data.phone} %0AEmail: ${data.email} %0A${data.message ? `Повідомлення: ${data.message}` : ''}`;
      await sendMessage(message);

      reset();
      window.sessionStorage.removeItem('FormData');
      setNotificationType('success');
      setIsNotificationOpen(true);
    } catch (error) {
      setNotificationType('error');
      setIsNotificationOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickCloseNotification = () => {
    setIsNotificationOpen(false);
  };

  return (
    <>
      <form
        className="mx-auto flex flex-col md:max-w-[450px] xl:max-w-[517px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="mb-5 text-center font-raleway text-lg font-semibold uppercase leading-[1.35] md:mb-6 md:text-xl xl:text-[20px]">
          {form.formTitle}
        </h3>
        {form.inputs.map(item => (
          <FormInput
            key={item.name.label}
            textarea={item.name.textarea}
            config={item.name}
            register={register}
            errors={errors}
          />
        ))}
        <CheckBox
          register={register}
          errors={errors}
          checkboxInput={checkboxInput}
        />
        <Button type="submit" className="mt-6 md:mx-auto md:mt-8">
          {isLoading ? <Loader /> : form.buttonText}
        </Button>
      </form>
      {isNotificationOpen && (
        <Modal
          isOpen={isNotificationOpen}
          onClose={onClickCloseNotification}
          type={notificationType}
          className={
            notificationType === 'success'
              ? 'top-1/4 px-7 py-[108px] md:w-[624px] md:px-24 md:py-[108px] xl:w-[802px] xl:px-[116px] xl:py-[119px]'
              : 'top-1/4 px-5 py-[120px] md:w-[624px] md:px-[97px] md:py-[108px] xl:w-[802px] xl:px-[110px] xl:py-[119px]'
          }
        />
      )}
    </>
  );
};
