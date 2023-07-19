import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './App.css';
import LogIn from './components/login';
import InputTextLabel from './components/InputText/InputTextLabel';
import ComponentCheckbox from './components/Checkbox';
import SwitchComponent from './components/SwitchComponent';
import RadioSelection from './components/RadioSelection';
import DropDown from './components/DropDown/DropDown';
import Btn from './components/base-button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export interface FormValues {
  firstName: string;
  password: string;
  textField: string;
  checkbox: boolean;
  toggle: boolean;
  radioSelection: '1' | '2' | '3';
  dropDown: string;
}

function App() {
  const schema = z.object({
    firstName: z.string().min(4, 'Минимум 4 символ'),
    password: z
      .string()
      .min(4, 'Your password is between 4 and 12 characters')
      .max(12, 'Your password is between 4 and 12 characters'),
    textField: z.string().min(0, 'Поле не должно быть пустым'),
    checkbox: z.boolean(),
    toggle: z.boolean(),
    radioSelection: z.string(),
    dropDown: z.string(),
  });
  const formMethods = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = formMethods;
  const onSubmit = (values: FormValues) => alert(JSON.stringify(values));

  return (
    <div className="App">
      <div className="wrapper">
        <div className="items">
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <LogIn />
              <InputTextLabel />
              <ComponentCheckbox />
              <SwitchComponent />
              <RadioSelection />
              <DropDown />
              <Btn />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
