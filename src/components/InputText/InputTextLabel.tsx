import React from 'react';
import { TextInput } from '@mantine/core';
import ErrorIcon from './ErrorIcon';
import { useFormContext } from 'react-hook-form';
import styles from './input-text.module.scss';
import { FormValues } from '../../App';

const InputTextLabel = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <TextInput
      {...register('textField', { required: 'Поле не должно быть пустым' })}
      classNames={{
        input: styles.input,
      }}
      error={errors?.textField?.message ? true : false}
      styles={{
        label: {
          color: '#666666',
          fontFamily: 'Noto Sans',
          fontSize: 12,
          fontWeight: 600,
          textAlign: 'left',
        },
      }}
      rightSection={errors?.textField?.message && <ErrorIcon />}
      size="md"
      radius={'md'}
      placeholder="Typing |"
      label="Input Text Label"
    />
  );
};

export default InputTextLabel;
