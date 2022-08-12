import React from 'react';
import { ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
import { Input } from '../../components/form/Input/input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountText,
  ForgotPasswordButton,
  ForgotPasswordText,
  Icon,
  Logo,
  Title,
} from './sign-in-styles';

import ImageLogo from '../../assets/logo.png';

export const SignIn = () => {
  return (
    // <> <- is empty because the react not accept two root elements, só i need use this
    <>
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

      <CreateAccount>
        <Icon name="log-in" />
        <CreateAccountText>Create an account</CreateAccountText>
      </CreateAccount>
    </>
  );
};
