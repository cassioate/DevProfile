import React from 'react';
import { ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
import { Input } from '../../components/form/Input/input';
import {
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordText,
  Logo,
  Title,
} from './sign-in-styles';

import ImageLogo from '../../assets/logo.png';

export const SignIn = () => {
  return (
    <ScrollView
      //KeyboardShouldPersistTaps="handled" means that when i click outside of the input, the keyboard will be dismissed
      keyboardShouldPersistTaps="handled"
      //ContetContainerStyle is used to set the padding of the ScrollView
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Logo source={ImageLogo}></Logo>
          <Title>Logon</Title>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <ButtonStyled title="Login"></ButtonStyled>

          <ForgotPasswordButton>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </ForgotPasswordButton>
        </Content>
      </Container>
    </ScrollView>
  );
};
