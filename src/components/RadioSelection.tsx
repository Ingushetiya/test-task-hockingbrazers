import React from 'react';
import { Group, Radio } from '@mantine/core';
import { useFormContext, Controller } from 'react-hook-form';
import { FormValues } from '../App';

const RadioSelection = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <div>
      <Controller
        control={control}
        name="radioSelection"
        render={({ field: { name, value, onChange } }) => {
          return (
            <Radio.Group
              name={name}
              value={value}
              onChange={(value) => onChange(value)}
              style={{
                display: 'flex',
              }}>
              <Group
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                mt="xs">
                <Radio color="violet" value="1" label="Radio Selection 1" />
                <Radio color="violet" value="2" label="Radio Selection 2" />
                <Radio color="violet" value="3" label="Radio Selection 3" />
              </Group>
            </Radio.Group>
          );
        }}
      />
    </div>
  );
};

export default RadioSelection;
