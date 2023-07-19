import React from 'react';
import { TextInput, PasswordInput } from '@mantine/core';
import { FormValues } from '../../App';

import { useFormContext } from 'react-hook-form';

import styles from './login.module.scss';

const LogIn = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="logIn">
      <TextInput
        {...register('firstName', { required: 'Обязательное поле', minLength: 5 })}
        classNames={{
          input: styles.input,
        }}
        style={{
          width: 560,
        }}
        styles={{
          label: {
            color: '#666666',
            fontFamily: 'Noto Sans',
            fontSize: 12,
            fontWeight: 600,
            textAlign: 'left',
          },
        }}
        error={errors?.firstName?.message}
        size="md"
        radius={'md'}
        placeholder="Enter username"
        label="Username"
      />
      <PasswordInput
        {...register('password', { required: 'Обязательное поле', minLength: 4, maxLength: 12 })}
        classNames={{
          input: styles.input,
        }}
        style={{
          width: 560,
        }}
        styles={{
          label: {
            marginTop: 25,
            color: '#666666',
            fontFamily: 'Noto Sans',
            fontSize: 12,
            fontWeight: 600,
            textAlign: 'left',
          },
        }}
        error={errors?.password?.message}
        size="md"
        radius={'md'}
        placeholder="Enter password"
        label="Password"
      />
    </div>
  );
};

export default LogIn;
