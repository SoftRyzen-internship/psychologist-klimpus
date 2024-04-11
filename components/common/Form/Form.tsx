'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { CheckBox } from '@/components/ui/Checkbox/Checkbox';
// import { Loader } from '@/components/ui/Loader/Loader';

import { FormData } from './types';

// import common from '@/data/common.json';
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
  // const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  // const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  useFormPersist('FormData', {
    watch,
    setValue,
  });

  const checkboxInput = watch(form.checkBox.name);

  const onSubmit: SubmitHandler<FormData> = () => {
    try {
      isLoading && setIsLoading(true);
      // setIsLoading(true);

      // const message = `Ім'я: ${data.name} %0AТелефон: ${data.phone} %0A${data.message ? `Повідомлення: ${data.message}` : ''}`;
      // await sendMessage(message);

      reset();
      window.sessionStorage.removeItem('FormData');
      // setShowSuccessModal(true);
    } catch (error) {
      // setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  // const onClickCloseModal = () => {
  //   setShowSuccessModal(false);
  //   setShowErrorModal(false);
  // };

  return (
    <>
      <form
        className="mx-auto flex flex-col xl:w-[517px]"
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
        {/* <Button
          tag="button"
          buttonType="submit"
          accent={true}
          className="w-full px-12 md:w-[185px] smOnly:mx-auto mdOnly:py-3"
        >
          {!isLoading ? common.buttonsText.v3 : <Loader />}
        </Button> */}
        <button type="submit">Відправити</button>
      </form>
    </>
  );
};
