import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { ButtonStyled } from '../../components/form/button/button';
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
import { useNavigation } from '@react-navigation/native';
import { InputHookControl } from '../../components/form/Input-hook/input';
import { FieldValues, useForm } from 'react-hook-form';

interface ScreenNavigationProp {
  navigate: (route: string) => void;
}

// the interface needs to be the same as the type of the FieldValues type in the UseForm() hook
// because of this, i use [name: string]: any as a type of InputFormHook
interface InputFormHook {
  // this mean that i can receive more than one atribute
  // i can receive email, name, password, etc... with this type of interface
  [name: string]: any;
}

export const SignIn = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const { control, handleSubmit } = useForm<FieldValues>();

  const handleSignIn = (form: InputFormHook) => {
    const data = {
      email: form.email,
      password: form.password,
    };
    console.log(data);
  };

  return (
    // <> <- is empty because the react not accept two root elements, só i need use this
    <>
      {/* this keyboard is used because in IOS the behavior is different to Android, so this is needed to make the same behavior */}
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
              <Title>Logon</Title>
              <InputHookControl
                name="email"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                keyboardType="email-address"
              ></InputHookControl>
              <InputHookControl
                name="password"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Password"
                secureTextEntry
              ></InputHookControl>

              <ButtonStyled title="Login" onPress={handleSubmit(handleSignIn)}></ButtonStyled>

              <ForgotPasswordButton>
                <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
              </ForgotPasswordButton>
            </Content>
          </Container>
        </ScrollView>

        <CreateAccount onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" />
          <CreateAccountText>Create an account</CreateAccountText>
        </CreateAccount>
      </KeyboardAvoidingView>
    </>
  );
};
