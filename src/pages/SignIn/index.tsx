import React from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/form/Input/input';
import { Container, Content, Title } from './sign-in-styles';

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
          <Title>Logon</Title>
          <Input placeholder="Email"></Input>
          <Input placeholder="Senha"></Input>
        </Content>
      </Container>
    </ScrollView>
  );
};
