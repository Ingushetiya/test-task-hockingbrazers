import React from 'react';
import { Checkbox } from '@mantine/core';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../App';
const ComponentCheckbox = () => {
  const { register } = useFormContext<FormValues>();
  return (
    <div className="checkbox">
      <Checkbox
        {...register('checkbox')}
        style={{
          marginTop: 32,
        }}
        label="Remember me"
        color="violet"
        size="md"
      />
    </div>
  );
};

export default ComponentCheckbox;
