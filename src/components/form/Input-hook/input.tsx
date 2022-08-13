import React, { FunctionComponent } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input/input';
import { Container } from './input-styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
}

export const InputHookControl: FunctionComponent<InputProps> = ({ name, control, ...props }) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...props} />
        )}
        name={name}
      ></Controller>
    </Container>
  );
};
