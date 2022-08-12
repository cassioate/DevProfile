import React from 'react';
import { ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
import { Input } from '../../components/form/Input/input';
import { Container, Content, Title } from './sign-up-styles';

export const SignUp = () => {
  return (
    <ScrollView
      //KeyboardShouldPersistTaps="handled" means that when i click outside of the input, the keyboard will be dismissed
      keyboardShouldPersistTaps="handled"
      //ContetContainerStyle is used to set the padding of the ScrollView
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Register</Title>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Password Confirmation"></Input>
          <ButtonStyled title="Send"></ButtonStyled>
        </Content>
      </Container>
    </ScrollView>
  );
};
