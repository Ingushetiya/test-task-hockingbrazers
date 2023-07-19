import React from 'react';
import { Switch } from '@mantine/core';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormValues } from '../App';
const SwitchComponent = () => {
  const { register, control } = useFormContext<FormValues>();
  const switchWatch = useWatch({ control, name: 'toggle' });
  return (
    <div>
      <Switch
        {...register('toggle')}
        style={{
          width: 24,
          height: 45,
          marginTop: 32,
        }}
        radius="lg"
        label={switchWatch ? 'on' : 'off'}
        color="violet"
      />
    </div>
  );
};

export default SwitchComponent;
