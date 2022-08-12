import React, { FunctionComponent } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonText } from './button-styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonStyled: FunctionComponent<ButtonProps> = ({ title, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
