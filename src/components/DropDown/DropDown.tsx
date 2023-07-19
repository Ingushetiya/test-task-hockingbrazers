import React from 'react';

import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './dropdown.module.scss';
import { useFormContext, Controller } from 'react-hook-form';
import { FormValues } from '../../App';

const DropDown = () => {
  const { control } = useFormContext<FormValues>();
  const data = ['DropDown option 1', 'DropDown option 2', 'DropDown option 3', 'DropDown option 4'];
  return (
    <Controller
      control={control}
      name="dropDown"
      render={({ field: { onChange, name, value } }) => {
        return (
          <div>
            <Select
              name={name}
              value={value}
              onChange={(value) => onChange(value)}
              style={{
                marginTop: 32,
              }}
              label="Dropdown Title"
              defaultValue={data[0]}
              rightSection={<IconChevronDown />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              classNames={{ item: styles.item, input: styles.input }}
              data={data}
            />
          </div>
        );
      }}
    />
  );
};

export default DropDown;
