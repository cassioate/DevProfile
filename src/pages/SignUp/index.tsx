import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
import { Input } from '../../components/form/Input/input';
import {
  Container,
  Content,
  Icon,
  Logo,
  ReturnButton,
  ReturnButtonText,
  Title,
} from './sign-up-styles';

import ImageLogo from '../../assets/logo.png';

export const SignUp = () => {
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        //KeyboardShouldPersistTaps="handled" means that when i click outside of the input, the keyboard will be dismissed
        keyboardShouldPersistTaps="handled"
        //ContetContainerStyle is used to set the padding of the ScrollView
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={ImageLogo}></Logo>
            <Title>Register</Title>
            <Input placeholder="Email"></Input>
            <Input placeholder="Password"></Input>
            <Input placeholder="Password Confirmation"></Input>
            <ButtonStyled title="Send"></ButtonStyled>
          </Content>
        </Container>
      </ScrollView>

      <ReturnButton>
        <Icon name="corner-down-left" />
        <ReturnButtonText>BACK</ReturnButtonText>
      </ReturnButton>
    </KeyboardAvoidingView>
  );
};
